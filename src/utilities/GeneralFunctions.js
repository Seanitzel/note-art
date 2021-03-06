/**
 * Transforms the first letter of a string to upper case.
 * @param {String} str String to transform
 * @returns {String}
 */
import { InvalidInput } from '../Exceptions'

export function firstToUpper ( str ) {
  return str.charAt( 0 ).toUpperCase() + str.slice( 1 )
}

/**
 * Returns a number formatted to show only 2 digits after the decimal point.
 * @param {number} num
 * @returns {Number}
 */
export function twoDigitFormat ( num ) {
  return Number( Number.parseFloat( num ).toFixed( 2 ) )
}

/**
 * Gets an array and 2 indexes and returns a new array with those members indexes switched.
 * @param {Array} arr
 * @param {number} i1
 * @param {number} i2
 * @returns {Array}
 */
export function switchMembers ( [ ...arr ], i1, i2 ) {
  const tmp = arr[i1]
  arr[i1]   = arr[i2]
  arr[i2]   = tmp
  return arr
}

/**
 * Returns a new array which starts from index, adds the rest of the members to it's end.
 * @param {Array} array Array to rearrange.
 * @param {number} index to arrange from.
 * @returns {Array}
 */
export function rearrangeArray ( [ ...array ], index ) {
  const tmp = []
  let i     = 0

  while ( i < index ) {
    tmp.push( array.shift() )
    ++i
  }

  return [ ...array, ...tmp ]
}

/**
 * Map a string substring to a different string.
 * @param {string} str String to reduce.
 * @param {string} toMap Substring to reduce.
 * @param {string} mapTo String to reduce to.
 * @returns {string}
 */
export function mapString ( str, toMap, mapTo ) {
  while ( str.includes( toMap ) ) {
    const length = str.length
    for ( let i = 0; i < length; ++i ) {
      if ( str.substr( i, toMap.length ) === toMap ) {
        str = `${ str.slice( 0, i ) }${ mapTo }${ str.slice( i + toMap.length ) }`
        break
      }
    }
  }

  return str
}


/** Function that count occurrences of a substring in a string.
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @returns {number}
 */
export function occurrencesInString ( string, subString ) {
  return string.split( subString ).length - 1
}

/**
 * Fills an array with it's own elements to fit a certain size.
 * @param arr The array to fit.
 * @param size The new size.
 * @returns {Array}
 */
export function fitArrayToSize ( [ ...arr ], size ) {
  while ( arr.length < size ) {
    arr = arr.concat( [ ...arr ] )
  }
  return arr.slice( 0, size )
}

/**
 * Returns the longest array from an array of arrays.
 * @param matrix Array of arrays
 * @returns {Array}
 */
export function longestArray ( matrix ) {
  if ( !Array.isArray( matrix ) || !matrix.every( arr => Array.isArray( arr ) ) ) {
    throw new InvalidInput( `Expected ${ matrix } and each of it's elements to be an array` )
  }
  return matrix.reduce( ( a, b ) => (a.length > b.length ? a : b), [] )
}
