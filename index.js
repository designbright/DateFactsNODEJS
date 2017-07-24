const moment = require('moment');
  moment().format();

const chalk = require('chalk');

let fullDate = chalk.blue(moment().format("LLLL"));
let dayOfYear = chalk.blue(moment().dayOfYear());
let secondsinDay = chalk.blue(moment().unix());
let daylightSavings = chalk.blue(moment().isDST());
let leapYear = chalk.blue(moment().isLeapYear());


console.log(`
  It is ${fullDate}
  It is the ${dayOfYear}th day of the year.
  It is ${secondsinDay} seconds into the day.
  It is ${daylightSavings} that this time is during Daylight Savings Time.
  It is ${leapYear} about this year being a leap year.
  `);
