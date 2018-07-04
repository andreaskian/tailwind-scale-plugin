const _ = require('lodash');

module.exports = function () {
  return function ({ addUtilities }) {

    const scaleUtilities = _.map(Array(100), (x, i) => ({
      [`.scale-${(i + 1)}`]: {
        transform: `scale(${((i + 1) / 100).toFixed(2)})`
      }
    }))

    addUtilities(scaleUtilities)
  }
}