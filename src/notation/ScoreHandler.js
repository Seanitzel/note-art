import Measure from './Measure'
import Score   from './Score'

/**
 * @class ScoreHandler
 * Static class that can convert scores to objects and back.
 */
export default class ScoreHandler {
  /**
   * Convert a measure to object literal.
   * @param {Measure} measure
   * @return {{duration: string, data: {}, maxDuration: (number)}}
   */
  static measureToObject ( measure ) {
    const notes = measure.data.map( notesMember => this.notesToObject( notesMember ) )

    return {
      maxDuration: measure.maxDuration,
      data:        notes,
    }
  }

  /**
   * Convert a measure's notes member to object literal.
   * @param notesMember
   * @return {{duration: *, notes: any[]}}
   */
  static notesToObject ( notesMember ) {
    const notes = {
      notes:    Array.from( notesMember.notes ),
      duration: notesMember.duration,
    }

    if ( notesMember.name ) {
      notes.name = notesMember.name
    }

    return notes
  }

  /**
   * Convert object literal representing a measure to an instance of Measure.
   * @param {object} measureObject
   * @return {Measure}
   */
  static objectToMeasure ( measureObject ) {
    const measure = new Measure( measureObject.maxDuration )
    measureObject.data.forEach( ( notesMember, position ) => {
      if ( notesMember.name ) {
        measure.addChord( { ...notesMember }, position )
      } else {
        measure.addNotes( { ...notesMember }, position )
      }
    } )

    return measure
  }

  /**
   * Convert a measure to object literal.
   * @param {Score} score
   * @return {{duration: string, voices: array, timeSignature: array, bpm: number}}
   */
  static scoreToObject ( score ) {
    const voices = {}
    Object.entries( score.voices ).map( ( [ voiceName, voiceData ] ) =>
      voices[voiceName] = voiceData.map( measure => this.measureToObject( measure ) ),
    )

    return {
      name:          score.name,
      timeSignature: score.timeSignature,
      bpm:           score.bpm,
      voices,
    }
  }

  /**
   * Convert object literal representing a Score to an instance of Score.
   * @param {object} scoreObject
   * @return {Score}
   */
  static objectToScore ( scoreObject ) {
    const score = new Score( {
      timeSignature: scoreObject.timeSignature,
      bpm:           scoreObject.bpm,
      name:          scoreObject.name,
    } )

    Object.entries( scoreObject.voices ).forEach( ( [ voiceName, voiceData ] ) => {
      score.addVoice( voiceName )
      voiceData.forEach( ( measureObject, measureIndex ) => {
        score.addMeasure( voiceName, { index: measureIndex, measure: this.objectToMeasure( measureObject ) } )
      } )
    } )

    return score
  }

  static cloneScore ( score ) {
    return this.objectToScore( this.scoreToObject( score ) )
  }
}
