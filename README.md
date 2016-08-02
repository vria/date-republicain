# date-republicain

[![Build Status](https://travis-ci.org/riabchenkovlad/date-republicain.svg?branch=master)](https://travis-ci.org/riabchenkovlad/date-republicain)

This library is a gregorian to republicain date converter.

The French Republican Calendar (Calendrier Républicain Français) or French Revolutionary Calendar (Calendrier Révolutionnaire Français), 
was a calendar created and implemented during the French Revolution, and used by the French government for about 12 years from late 1793 to 1805. 
Read more about Republican Calendar in the [dedicated article](https://en.wikipedia.org/wiki/French_Republican_Calendar).

Converter interpolates the Revolutionary Calendar after it was abolished in 1805 until nowadays and to future. So you can calculate your birth date.

## Install

```
bower install date-republicain
```

## Use

Don't forget to include `moment.js` before `date-republicain.js`.

Use `getRepublicainDate` function to get the corresponding republicain date. The argument is whatever accepts [moment.js](http://momentjs.com/docs/)

```
<script src="path_to/moment.js">
<script src="path_to/date-republicain.js">
<script>
    var republicainDate = getRepublicainDate("1792-09-22");
</script>
```

`getRepublicainDate` returns an object with properties:
- `year` [integer]
- `romainYear` [string] year represented by Roman numerals
- `month` [integer] from 1 to 13, where 1 corresponds to 'Vendémiaire', 2 corresponds to 'Brumaire', ..., 12 corresponds to 'Fructidor', 13 corresponds to 'Jours complémentaires' 
- `monthName` [string] contains month name ('Vendémiaire', 'Brumaire', ..., 'Jours complémentaires')
- `monthLink` [string] Wikipedia link for `monthName`
- `day` [integer] day number from 1 to 30. For 'Jours complémentaires' `day` is in range from 1 to 5 (or from 1 to 6 for leap year)
- `dayName` [string] each day in Republican Calendar is given a name: 'Raisin', 'Safran', 'Châtaigne', ..., 'Jour des récompenses', 'Jour de la révolution'
- `dayLink` [string] Wikipedia link for `dayName`
