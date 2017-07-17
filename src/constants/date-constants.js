/**
 * Created by Amit on 15-07-2017.
 */

import _ from 'lodash';

let currentYear = new Date().getFullYear();
let previousYearsCount = 15;
let yearsRange = _.range(currentYear, currentYear - previousYearsCount);

let years = _.map(yearsRange, function (year) {
   return { key : year, text : year, value : year }
});

const dateConstants = {
    daysInMonth : {
        '1': 31, '2': 28, '3': 31, '4': 30, '5': 31, '6': 30,
        '7': 31, '8': 31, '9': 30, '10': 31, '11': 30, '12': 31
    },
    months: [
        { key:1, text : 'January', value : 1},
        { key:2, text : 'February', value : 2},
        { key:3, text : 'March', value : 3},
        { key:4, text : 'April', value : 4},
        { key:5, text : 'May', value : 5},
        { key:6, text : 'June', value : 6},
        { key:7, text : 'July', value : 7},
        { key:8, text : 'August', value : 8},
        { key:9, text : 'September', value : 9},
        { key:10, text : 'October', value : 10},
        { key:11, text : 'November', value : 11},
        { key:12, text : 'December', value : 12}
    ],
    years : years
};

export default dateConstants;