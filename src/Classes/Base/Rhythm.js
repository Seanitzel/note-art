import Note from './Note'
import {
    isArray
} from 'util'
import Chord from './Chord'
import {
    note_durations,
} from './Patterns'
var rhythm;

// for cross browser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext //web audio api instance
const audioCtx = new AudioContext()
let min_interval = 1 / 16 //the interval at which the schedualer will be called and data will be able to be played.
let next_interval = 0.0 //the time at which the next interval will be called updating with currentTime
let calculate_ahead = 10 // how many notes to calculate precise time for ahead

function scheduler() {
    // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
    while (next_interval < audioCtx.currentTime + rhythm.scheduleAheadTime) {
        if (rhythm.next_note >= rhythm.data_with_time.length - 1){
        for(let i=0;i<calculate_ahead;i++)
            rhythm.scheduleNote()
        }
        rhythm.nextNote()
    }
    rhythm.timerID = setTimeout(scheduler, rhythm.lookahead)
}
/**
 * Creates a rhythm instance which holds bpm and time signature information.
 * @class
 */
export class Rhythm {
    /**
     * Create a new instance of rhythm.
     * @param {Number} bpm Speed of the rhythm in beats per minute
     * @param {Array} time_signature the number of notes per measure as an array [number_of_notes, type_of_notes]
     */
    constructor(bpm, time_signature) {
        this.data = null // the Sounds that will be played
        this.dataKeeper = null //will hold the music to reload it when it reaches the end
        this.reload_data = false //variable to dictate whether data needs to be reloaded or not

        this.metronome_sound = new Howl({
            src: ['/static/Media/Metronome/1.wav']
        })

        this.data_with_time = [] //Array which contains objects with sounds and time properties
        this.next_note = 0 //the next note which needs to be played
        this.next_note_to_schedule = 0 //the next note which needs to be scheduled and inserted to data_with_time
        this.overall_time = 0 //the overall time that passes when scheduling the notes(sum of start time and every duration of every note scheduled)

        this.metronome = false //metronome playing or not

        this.timerID = null //the timerID of the setInterval
        this.lookahead = 10 // How frequently to call scheduling function (in milliseconds)
        this.scheduleAheadTime = 0.1 // How far ahead to schedule audio (sec)

        this.seconds_per_beat = 60 / bpm //beats per second - tempo

        this.current_beat = 1 //current beat 
        this.lastNoteDrawn = 3

        this.bpm = bpm
        this.beats_per_measure = time_signature[0]
        this.beat_duration = time_signature[1]
        this.isPlaying = false
        this.beat_check = 0

        this.loop = true
    }
    /**
     * returns a instance of rhythm to avoid creating more than one(a singleton)
     * @param {Number} bpm Speed of the rhythm in beats per minute
     * @param {Array} time_signature the number of notes per measure as an array [number_of_notes, type_of_notes]
     * @static
     */
    static getRhythm(bpm = 80, time_signature = [4, 4]) {
        if (rhythm)
            return rhythm
        rhythm = new Rhythm(bpm, time_signature)
        return rhythm
    }
    /**
     * Schedual a note to be played at a specific time
     */
    scheduleNote() {
        // push the note on the queue, even if we're not playing.
        if (this.data[this.next_note_to_schedule]) {
            this.scheduleNoteHelper(this.data[this.next_note_to_schedule])
            this.next_note_to_schedule++
        } else {
            this.next_note_to_schedule = 0
        }
    }
    /**
     * Helps the SchedualNote check what kind of data is dealt with at the moment and handles it.
     * @param {Array/Note/Chord} data 
     */
    scheduleNoteHelper(data) {
        if (data instanceof Note || data instanceof Chord) {
            this.data_with_time.push({
                sounds: [data],
                time: this.overall_time
            })
            this.overall_time += 60 / this.bpm * note_durations[data.duration] * this.beats_per_measure
        } else if (isArray(data)) {
            let min_duration = note_durations[data.duration]
            data.forEach((note) => {
                min_duration = min_duration < note_durations[note.duration] ? min_duration : note_durations[note.duration]
            })
            this.data_with_time.push({
                sounds: data,
                time: this.overall_time
            })
            this.overall_time += 60 / this.bpm * min_duration * this.beats_per_measure
        }
    }
    playSounds() {
        for (const i of this.data_with_time[this.next_note].sounds) {
            // console.log(i.toString())
            i.play()
        }
    }
    /**
     * Advances to the next note and updates the beat
     */
    nextNote() {
        next_interval += this.seconds_per_beat * min_interval
        // Advance the beat number, wrap to zero
        this.beat_check += this.seconds_per_beat * min_interval
        if (this.prev_beat_time + this.seconds_per_beat <= audioCtx.currentTime) {
            // console.log(this.prev_beat_time - this.start_time)
            if (this.metronome)
                this.metronome_sound.play()
            // console.log(audioCtx.currentTime - this.start_time)
            this.beat_check = 0
            this.current_beat++
            if (this.current_beat === this.beats_per_measure + 1) {
                this.current_beat = 1
            }
            this.prev_beat_time += this.seconds_per_beat
        }
        if (this.data_with_time[this.next_note])
            if (this.data_with_time[this.next_note].time <= audioCtx.currentTime) {
                // console.log(this.data_with_time[this.next_note].time - this.start_time)
                this.playSounds()
                this.next_note++
            }
    }
    draw() {
        let drawNote = rhythm.lastNoteDrawn
        rhythm.currentTime = audioCtx.currentTime

        // We only need to draw if the note has moved.
        if (rhythm.lastNoteDrawn != drawNote) {

            rhythm.lastNoteDrawn = drawNote
        }
        // set up to draw again
        requestAnimationFrame(rhythm.draw)
    }
    getBeat() {
        return this.current_beat
    }
    toggle(index = 0) {
        rhythm = this

        this.isPlaying = !this.isPlaying
        if (this.isPlaying) { // start playing
            // check if context is in suspended state (autoplay policy)
            if (audioCtx.state === 'suspended') {
                audioCtx.resume()
            }
            this.start_time = audioCtx.currentTime
            this.overall_time = audioCtx.currentTime
            this.prev_beat_time = audioCtx.currentTime
            this.data_with_time.length = 0
            this.next_note = index
            this.current_beat = 1
            this.next_note_to_schedule = index
            scheduler() // kick off scheduling
            requestAnimationFrame(this.draw) // start the drawing loop.
        } else {
            clearTimeout(this.timerID)
        }
    }
    addNotes(data) {
        this.data = data
    }
    toggleMetronome() {
        if (rhythm)
            rhythm.metronome = !rhythm.metronome
    }
    updateBPM(bpm) {
        this.bpm = bpm
        this.seconds_per_beat = 60 / bpm
        if(this.isPlaying == true){
            this.toggle()
            this.toggle()
        }
    }
}
export default Rhythm