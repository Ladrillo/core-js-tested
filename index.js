/*
Use summation to do the following:
    1. Receive a number
    2. Use a counter to return the summation of that number.

For example, `summation(4)` should return 10 because 1+2+3+4 is 10.
If passed 0 or a negative number, it should return 0
*/

function summation(num) {
  if (num <= 0) return 0
  let result = 0
  for (let i = num; i > 0; i--) {
    result += i
  }
  return result
}
console.log('sumation in action: ', summation(13))

try {
  module.exports = {
    summation,
  }
} catch (err) { } // eslint-disable-line
