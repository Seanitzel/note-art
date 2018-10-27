/*
The MIT License (MIT)

Copyright (c) 2014 Chris Wilson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

window.AudioContext = window.AudioContext || window.webkitAudioContext

var MAX_SIZE = null
var audioContext = null
var isPlaying = false
var sourceNode = null
var analyser = null
var theBuffer = null
var DEBUGCANVAS = null
var mediaStreamSource = null
var detectorElem,
    canvasElem,
    waveCanvas,
    pitchElem,
    noteElem,
    detuneElem,
    detuneAmount,
    noteElem2

export const pitch_data = {
        note: "-",
        pitch: "-",
        detune: "-",
}

window.onload = function() {
    audioContext = new AudioContext()
    MAX_SIZE = Math.max(4, Math.floor(audioContext.sampleRate / 5000)) // corresponds to a 5kHz signal

    detectorElem = document.getElementById("detector")
    canvasElem = document.getElementById("output")
    DEBUGCANVAS = document.getElementById("waveform")

    if (DEBUGCANVAS) {
        waveCanvas = DEBUGCANVAS.getContext("2d")
        waveCanvas.strokeStyle = "black"
        waveCanvas.lineWidth = 1
    }
    pitchElem = document.getElementById("pitch")
    noteElem = document.getElementById("note")
    noteElem2 = document.getElementById("note2")
    detuneElem = document.getElementById("detune")
    detuneAmount = document.getElementById("detune_amt")

    detectorElem.ondragenter = function() {
        this.classList.add("droptarget")
        return false
    }
    detectorElem.ondragleave = function() {
        this.classList.remove("droptarget")
        return false
    }
    detectorElem.ondrop = function(e) {
        this.classList.remove("droptarget")
        e.preventDefault()
        theBuffer = null

        var reader = new FileReader()
        reader.onload = function(event) {
            audioContext.decodeAudioData(event.target.result, function(buffer) {
                theBuffer = buffer
            }, function() {
                alert("error loading!")
            })

        }
        reader.onerror = function(event) {
            alert("Error: " + reader.error)
        }
        reader.readAsArrayBuffer(e.dataTransfer.files[0])
        return false
    }
}

function error() {
    alert('Stream generation failed.')
}

function getUserMedia(dictionary, callback) {
    try {
        navigator.getUserMedia =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia
        navigator.getUserMedia(dictionary, callback, error)
    } catch (e) {
        alert('getUserMedia threw exception :' + e)
    }
}

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream)

    // Connect it to the destination.
    analyser = audioContext.createAnalyser()
    analyser.fftSize = 2048
    mediaStreamSource.connect(analyser)
    updatePitch()
}

export function toggleLiveInput() {
    if (isPlaying) {
        //stop playing and return
        sourceNode.stop(0)
        sourceNode = null
        analyser = null
        isPlaying = false
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = window.webkitCancelAnimationFrame
        window.cancelAnimationFrame(rafID)
    }
    getUserMedia({
        "audio": {
            "mandatory": {
                "googEchoCancellation": "false",
                "googAutoGainControl": "false",
                "googNoiseSuppression": "false",
                "googHighpassFilter": "false"
            },
            "optional": []
        },
    }, gotStream)
}

var rafID = null
var tracks = null
var buflen = 2048
var buf = new Float32Array(buflen)

var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export function noteFromPitch(frequency) {
    var noteNum = 12 * (Math.log(frequency / 440) / Math.log(2))
    return Math.round(noteNum) + 69
}

function frequencyFromNoteNumber(note) {
    return 440 * Math.pow(2, (note - 69) / 12)
}

function centsOffFromPitch(frequency, note) {
    return Math.floor(1200 * Math.log(frequency / frequencyFromNoteNumber(note)) / Math.log(2))
}

function autoCorrelate(buf, sampleRate) {
    // Implements the ACF2+ algorithm
    var SIZE = buf.length
    var rms = 0

    for (var i = 0; i < SIZE; i++) {
        var val = buf[i]
        rms += val * val
    }
    rms = Math.sqrt(rms / SIZE)
    if (rms < 0.01) // not enough signal
        return -1

    var r1 = 0,
        r2 = SIZE - 1,
        thres = 0.2
    for (var i = 0; i < SIZE / 2; i++)
        if (Math.abs(buf[i]) < thres) {
            r1 = i
            break
        }
    for (var i = 1; i < SIZE / 2; i++)
        if (Math.abs(buf[SIZE - i]) < thres) {
            r2 = SIZE - i
            break
        }

    buf = buf.slice(r1, r2)
    SIZE = buf.length

    var c = new Array(SIZE).fill(0)
    for (var i = 0; i < SIZE; i++)
        for (var j = 0; j < SIZE - i; j++)
            c[i] = c[i] + buf[j] * buf[j + i]

    var d = 0
    while (c[d] > c[d + 1]) d++
    var maxval = -1,
        maxpos = -1
    for (var i = d; i < SIZE; i++) {
        if (c[i] > maxval) {
            maxval = c[i]
            maxpos = i
        }
    }
    var T0 = maxpos

    var x1 = c[T0 - 1],
        x2 = c[T0],
        x3 = c[T0 + 1],
        a = (x1 + x3 - 2 * x2) / 2,
        b = (x3 - x1) / 2
    if (a) T0 = T0 - b / (2 * a)

    return sampleRate / T0
}
export let pitch = null
export let note = null
export let detune = null

export function updatePitch(time) {
    var cycles = new Array
    if (!analyser)
        return
    analyser.getFloatTimeDomainData(buf)
    var ac = autoCorrelate(buf, audioContext.sampleRate)
    // TODO: Paint confidence meter on canvasElem here.

    if (ac == -1) {
        detectorElem.className = "vague"
        pitchElem.innerText = "--"
        noteElem.innerText = "-"
        detuneElem.className = ""
        detuneAmount.innerText = "--"
    } else {
        detectorElem.className = "confident"
        pitch = ac
        pitchElem.innerText = Math.round(pitch)
        pitch_data.pitch = Math.round(pitch)
        note = noteFromPitch(pitch)
        noteElem.innerHTML = noteStrings[note % 12]
        pitch_data.note = noteStrings[note % 12]
        detune = centsOffFromPitch(pitch, note)
        if (detune == 0) {
            detuneElem.className = ""
            detuneAmount.innerHTML = "--"
        } else {
            if (detune < 0){
                detuneElem.className = "flat"
                pitch_data.detune = Math.abs(detune) + "b"
            }
            else{
                detuneElem.className = "sharp"
                pitch_data.detune = Math.abs(detune) + "#"
            }
                detuneAmount.innerHTML = Math.abs(detune)
        }
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = window.webkitRequestAnimationFrame
    rafID = window.requestAnimationFrame(updatePitch)
}