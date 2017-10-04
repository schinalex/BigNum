'use strict'

const BigNum = require('./BigNum')

// factorial :: Number -> BigNum
const factorial = n => {
  let product = BigNum(1)
  for (let i = 1; i <= n; ++i) {
    product = product.times(BigNum(i))
  }
  return product
}

module.exports = factorial
