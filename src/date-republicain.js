import fallEquinoxes from "./fall_equinoxes";
import moment from "moment";
import romanize from "./romanize";
import table from "./republicain-calendar";

/**
 * The structure that gets returned.
 * @constructor
 * @param year
 * @param month
 * @param day
 */
const RepublicainDate = function (year, month, day) {

        this.year = () => year;

        this.romanYear = () => romanize(year);

        this.month = () => month;

        this.monthName = () => table[month - 1].name;

        this.monthLink = () => table[month - 1].link;

        this.day = () => day;

        this.dayName = () => table[month - 1].days[day - 1].name;

        this.dayLink = () => table[month - 1].days[day - 1].link;

    },

    /**
     * Get equinox date for given year.
     * @param year
     * @returns {moment.Moment}
     */
    getEquinox = function (year) {

        const september = 8;

        return moment([
            year,
            september,
            fallEquinoxes[year]
        ]);

    };

/**
 * Given a gregorian date calculate a corresponding republicain date.
 * @param {number} dateInput
 * @returns {RepublicainDate}
 */
export default function getRepublicainDate (dateInput) {

    const gregorian = moment(dateInput);
    if (!gregorian.isValid()) {

        throw new Error("Invalid date");

    }

    if (gregorian.isBefore("1792-09-22")) {

        throw new Error("The date must be later then Sep 22 1792");

    }

    const fistYear = 1792,
        nbDaysInRepublicainMonth = 30;
    let equinox = getEquinox(gregorian.year()),
        year;

    if (gregorian.isBefore(equinox)) {

        equinox = getEquinox(gregorian.year() - 1);
        year = gregorian.year() - fistYear;

    } else {

        year = gregorian.year() - fistYear + 1;

    }

    const diffDays = gregorian.diff(
            equinox,
            "days"
        ),
        month = Math.floor(diffDays / nbDaysInRepublicainMonth) + 1,
        day = (diffDays % nbDaysInRepublicainMonth) + 1;

    return new RepublicainDate(
        year,
        month,
        day
    );

}
