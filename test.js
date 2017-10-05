'use strict'

const BigNum = require('./BigNum')
const factorial = require('./factorial')
const FACTORIAL_OF_1000 = require('./factorialOf1000')

const expect = x => ({
  x,
  toEqual: y => {
    if (x.num && y.num) {
      if (!x.equal(y)) {
        console.error(`Error: Expected BigNum(${x.num.join('')}) to equal BigNum(${y.num.join('')})`)
      } else {
        // console.log(x, y)
      }
    } else {
      if (x != y) {
        console.error(`Error: Expected ${x} to equal ${y}`)
      } else {
        // console.log(x, y)
      }
    }
  }

})

// creation
expect(BigNum(undefined).fold()).toEqual(0)
expect(BigNum(0).fold()).toEqual(0)
expect(BigNum(1).fold()).toEqual(1)
expect(BigNum(99).fold()).toEqual(99)
expect(BigNum([1]).fold()).toEqual(1)
expect(BigNum([1, 2, 3]).fold()).toEqual(123)

// addition
expect(BigNum(0).plus(BigNum(0)).fold()).toEqual(0)
expect(BigNum(0).plus(BigNum(1)).fold()).toEqual(1)
expect(BigNum(1).plus(BigNum(0)).fold()).toEqual(1)
expect(BigNum(1).plus(BigNum(1)).fold()).toEqual(2)
expect(BigNum(2).plus(BigNum(2)).fold()).toEqual(4)
expect(BigNum(1).plus(BigNum(9)).fold()).toEqual(10)
expect(BigNum(999).plus(BigNum(1)).fold()).toEqual(1000)
expect(BigNum(1).plus(BigNum(999)).fold()).toEqual(1000)
expect(BigNum(199).plus(BigNum(1)).fold()).toEqual(200)
expect(BigNum(18).plus(BigNum(1)).fold()).toEqual(19)
expect(BigNum(918).plus(BigNum(1)).fold()).toEqual(919)

// lessThan
expect(BigNum(1).lessThan(BigNum(0))).toEqual(false)
expect(BigNum(0).lessThan(BigNum(1))).toEqual(true)
expect(BigNum(2).lessThan(BigNum(100))).toEqual(true)
expect(BigNum(100).lessThan(BigNum(9))).toEqual(false)
expect(BigNum(0).lessThan(BigNum(100))).toEqual(true)
expect(BigNum(100).lessThan(BigNum(0))).toEqual(false)

// multiplication
expect(BigNum(0).times(BigNum(1)).fold()).toEqual(0)
expect(BigNum(1).times(BigNum(10)).fold()).toEqual(10)
expect(BigNum(1).times(BigNum(19)).fold()).toEqual(19)
expect(BigNum(1).times(BigNum(0)).fold()).toEqual(0)
expect(BigNum(1).times(BigNum(1)).fold()).toEqual(1)
expect(BigNum(2).times(BigNum(3)).fold()).toEqual(6)
expect(BigNum(1).times(BigNum(99)).fold()).toEqual(99)
expect(BigNum(100).times(BigNum(0)).fold()).toEqual(0)
expect(BigNum(100).times(BigNum(1)).fold()).toEqual(100)
expect(BigNum(1).times(BigNum(99)).fold()).toEqual(99)

// factorial
expect(factorial(0).fold()).toEqual(1)
expect(factorial(1).fold()).toEqual(1)
expect(factorial(2).fold()).toEqual(2)
expect(factorial(3).fold()).toEqual(6)
expect(factorial(4).fold()).toEqual(24)
expect(factorial(5).fold()).toEqual(120)
// expect(factorial(1000).fold()).toEqual(FACTORIAL_OF_1000) // takes too much time
// expect(factorial(1000000).length).toEqual(5565709) // don't run this :D

console.log('Done!')
