# date-republicain

[![Build Status](https://travis-ci.org/vria/date-republicain.svg?branch=master)](https://travis-ci.org/vria/date-republicain)
[![codecov](https://codecov.io/gh/vria/date-republicain/branch/master/graph/badge.svg)](https://codecov.io/gh/vria/date-republicain)

This library is a gregorian to republicain date converter.

The French Republican Calendar (🇫🇷 Calendrier Républicain Français) or French Revolutionary Calendar
(🇫🇷: Calendrier Révolutionnaire Français), was a calendar created during the French Revolution and used by French
governments for about 12 years from 1793 to 1805. Read more about Republican Calendar in the
[dedicated article](https://en.wikipedia.org/wiki/French_Republican_Calendar).

This converter interpolates the Revolutionary Calendar after it was abolished in 1805 until nowadays and to future.

## Install

```
npm install date-republicain
```

## Use

The complied script [dist/date-republicain.js](dist/date-republicain.js) can be used in different environments.

It provides the function `getRepublicainDate(gregorianDate)` that returns corresponding republicain date.

`gregorianDate` argument is whatever [moment.js](http://momentjs.com/docs/) can parse.

Returned republicain date is an object with these methods:
- `day(): [number]`  returns day number from 1 to 30. For "Jours complémentaires" it returns a value from 1 to 5 
  (from 1 to 6 for aleap year).
- `dayName(): [string]` each day in Republican Calendar is given a name: "Raisin", "Safran", "Châtaigne", ...,
  "Jour des récompenses", "Jour de la révolution".
- `dayLink(): [string]` a Wikipedia link to corresponding `dayName()`.
- `month(): [number]` returns a number from 1 to 13. "1" corresponds to "Vendémiaire", "2" corresponds to "Brumaire", 
  ..., "12" corresponds to "Fructidor", "13" corresponds to "Jours complémentaires".
- `monthName(): [string]` returns a month name ("Vendémiaire", "Brumaire", ..., "Jours complémentaires").
- `monthLink(): [string]` a Wikipedia link to corresponding `monthName()`.
- `year()[number]` returns a year of the Republican Era.
- `romainYear(): [string]` a year represented by Roman numerals.

#### Global function in browser

Don't forget to include `moment.js` before `date-republicain.js`.

```
<script src="path_to/moment.js">
<script src="path_to/date-republicain.js">
<script>
    var republicainDate = getRepublicainDate("1792-09-22");
</script>
```

#### Node.js

Nodejs support will be added later.
