---
title: MusicFunctions
---

# MusicFunctions

## Functions

<dl>
<dt><a href="#toPianoChord">toPianoChord({pitchClasses}, octave)</a> ⇒ <code>Array</code></dt>
<dd><p>Generates a group of notes that represent chord played on a piano in a certain octave.</p>
</dd>
<dt><a href="#calculateInterval">calculateInterval(pitchClass1, pitchClass2)</a> ⇒ <code>Number</code></dt>
<dd><p>Calculate the pure interval between 2 pitch classes.</p>
</dd>
<dt><a href="#noteToObject">noteToObject(pitch)</a> ⇒ <code>Object</code></dt>
<dd><p>Turns a note into an object with pitch class and octave.</p>
</dd>
<dt><a href="#notesInRange">notesInRange(base, range)</a></dt>
<dd><p>Returns an object where the keys are raw notes and their value is an instance of that note.</p>
</dd>
</dl>

<a name="toPianoChord"></a>

## toPianoChord({pitchClasses}, octave) ⇒ <code>Array</code>
Generates a group of notes that represent chord played on a piano in a certain octave.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| {pitchClasses} | <code>Array</code> | An object with a pitch classes key that holds an array of pitch classes, or simple an     instance of chord |
| octave | <code>number</code> | Octave for the chord root. |

<a name="calculateInterval"></a>

## calculateInterval(pitchClass1, pitchClass2) ⇒ <code>Number</code>
Calculate the pure interval between 2 pitch classes.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pitchClass1 | <code>PitchClass</code> | first note |
| pitchClass2 | <code>PitchClass</code> | second note |

<a name="noteToObject"></a>

## noteToObject(pitch) ⇒ <code>Object</code>
Turns a note into an object with pitch class and octave.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pitch | <code>String</code> | Pitch as a string, e.g Ab3 |

<a name="notesInRange"></a>

## notesInRange(base, range)
Returns an object where the keys are raw notes and their value is an instance of that note.

**Kind**: global function  

| Param |
| --- |
| base | 
| range | 
