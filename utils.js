'use strict'

// reverse :: Array -> Array
const reverse = arr => arr.map(x => x).reverse()

// firstDigit :: Number -> Number
const firstDigit = n => Number(n.toString()[0])

// lastDigit :: Number -> Number
const lastDigit = n => Number(reverse(n.toString().split(''))[0])

module.exports = {firstDigit, lastDigit, reverse}
