'use strict'

const {reverse, firstDigit, lastDigit} = require('./utils')

// BigNum :: a -> BigNum(b)
const BigNum = n => {
  const num = Array.isArray(n)
    ? n
    : typeof n === 'number'
      ? n.toString().split('').map(Number)
      : [0]

  const a = {
    num,
    fold: () => num.join(''),
    empty: () => BigNum(0),
    plus: x => add(x, a),
    minus: x => subtract(x, a),
    times: x => multiply(x, a),
    obelus: x => divide(x, a),
    concat: x => add(x, a),
    equal: x => equal(x, a),
    lessThan: x => lessThan(x, a),
    length: num.length,
    inspect: () => `BigNum(${num.join('')})`
  }
  return a
}

// add :: (BigNum, BigNum) -> BigNum
const add = ({num: a}, {num: b}) => { // to refactor
  const [xs, ys] = a.length > b.length
    ? [a, b].map(reverse)
    : [b, a].map(reverse)
  const result = []
  let remainder = 0
  xs.forEach((x, i) => {
    const y = ys[i]
      ? ys[i]
      : 0
    const sum = x + y + remainder
    remainder = sum <= 9
      ? 0
      : firstDigit(sum)
    result.push(lastDigit(sum))
  })
  if (remainder === 1) result.push(remainder)
  return BigNum(reverse(result))
}

// subtract :: (BigNum, BigNum) -> BigNum
const subtract = (minuend, subtrahend) => {
  // to be continued...
  // retun difference
}

// multiply :: (BigNum, BigNum) -> BigNum
const multiply = (multiplier, multiplicand) => { // to refactor
  let product = BigNum(0)
  for (let i = BigNum(0); i.lessThan(multiplier); i = i.plus(BigNum(1))) {
    product = product.plus(multiplicand)
  }
  return product
}

// divide :: (BigNum, BigNum) -> BigNum
const divide = (divisor, dividend) => {
  // to be continued...
}

// equal :: (BigNum, BigNum) -> Boolean
const equal = (a, b) => {
  if (a.length !== b.length) {
    return false
  } else {
    const digitsA = a.num
    const digitsB = b.num
    return !digitsA.some((x, i) => {
      if (digitsB[i] !== digitsA[i]) return true
    })
  }
}

// lessThan :: (BigNum, BigNum) -> Boolean
const lessThan = (a, b) => {
  let answer = false
  if (b.length < a.length) answer = true
  if (b.length === a.length) {
    const digitsA = a.num
    const digitsB = b.num
    answer = digitsA.some((x, i) => {
      if (digitsB[i] < digitsA[i]) return true
    })
  }
  return answer
}

module.exports = BigNum
