'use strict'

const {firstDigit, lastDigit} = require('./utils')

// BigNum :: a -> BigNum(b)
const BigNum = n => {
  const num = Array.isArray(n)
    ? n
    : typeof n === 'number'
      ? n.toString().split('')
      : ['0']

  const a = {
    num,
    empty: () => BigNum(0),
    plus: x => add(x, a),
    minus: x => subtract(x, a),
    times: x => multiply(x, a),
    obelus: x => divide(x, a),
    compare: (byThis, x) => compare(byThis, x, a),
    length: num.length,
    inspect: () => `BigNum(${num.join('')})`
  }
  return a
}

// add :: (BigNum, BigNum) -> BigNum
const add = ({num: a}, {num: b}) => { // to refactor
  const [xs, ys] = a.length > b.length
    ? [a.reverse(), b.reverse()]
    : [b.reverse(), a.reverse()]
  const result = []
  let remainder = 0
  xs.forEach((x, i) => {
    const sum = Number(x) + Number(ys[i]) + remainder
    remainder = firstDigit(sum)
    result.push(lastDigit(sum))
  })
  if (remainder === '1') result.push(remainder)

  return BigNum(result.reverse())
}

// subtract :: (BigNum, BigNum) -> BigNum
const subtract = (minuend, subtrahend) => {
  // to be continued...
  // retun difference
}

// multiply :: (BigNum, BigNum) -> BigNum
const multiply = (multiplier, multiplicand) => { // to refactor
  let product = BigNum(0)
  for (let i = 0; i < multiplier; i++) { // multiplier needs to be a BigNum as well
    product = product.plus(multiplicand)
  }
  return product
}

// divide :: (BigNum, BigNum) -> BigNum
const divide = (divisor, dividend) => {
  // to be continued...
}

// compare :: (BigNum, BigNum) -> Boolean
const compare = (a, b) => {
  // to be even more continued...
}

module.exports = BigNum
