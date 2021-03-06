/**
 * @class Constants
 * @classdesc Contains music theory structures and databases
 * e.g pitch classes, interval names, scales and more.
 */
export class Constants {
  /**
   * The raw pitch classes using sharps.
   * @type {Array}
   */
  static sharpClassNotes = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ]

  /**
   * The raw pitch classes using flats.
   * @type {Array}
   */
  static flatClassNotes = [ 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B' ]

  static pitchClassLetters = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ]

  static getPitchClassSet ( set ) {
    if ( set === '#' ) {
      return Constants.sharpClassNotes
    }
    if ( set === 'b' ) {
      return Constants.flatClassNotes
    }
    return null
  }

  /**
   * The raw pitch classes.
   * @type {Array}
   */
  static pitchClasses = [
    'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#',
    'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B',
  ]

  /**
   * All the intervals with the number semi-tones they represent.
   * @type {object}
   */
  static intervals = {
    U:    0,
    m2:   1,
    M2:   2,
    m3:   3,
    M3:   4,
    P4:   5,
    aug4: 6,
    dim5: 6,
    P5:   7,
    m6:   8,
    M6:   9,
    m7:   10,
    M7:   11,
    P8:   12,
  }

  static noteDurations = {
    '1n':  64,
    '2n':  32,
    '2n.': 48,
    '2t':  21,
    '4n':  16,
    '8n':  8,
    '16n': 4,
    '32n': 2,
    '64n': 1,
  }
}
