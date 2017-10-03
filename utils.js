'use strict'

// lastDigit :: Number -> String
exports.lastDigit = n => n.toString().split('').reverse()[0]

// firstDigit :: Number -> String
exports.firstDigit = n => n.toString()[0]
