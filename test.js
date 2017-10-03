'use strict'

const BigNum = require('./BigNum')

// // creation
// console.log(BigNum(undefined).num)
// console.log(BigNum(0).num)
// console.log(BigNum(1).num)
// console.log(BigNum(10).num)
// console.log(BigNum([2]).num)
// console.log(BigNum([1, 2, 3]))

// // addition
// console.log(BigNum(0).plus(BigNum(0)))
// console.log(BigNum(0).plus(BigNum(1)))
// console.log(BigNum(1).plus(BigNum(0)))
// console.log(BigNum(1).plus(BigNum(1)))
// console.log(BigNum(2).plus(BigNum(2)))
// console.log(BigNum(100).plus(BigNum(1)))
// console.log(BigNum(1).plus(BigNum(100)))
// console.log(BigNum(1).plus(BigNum(9)))
// console.log(BigNum(199).plus(BigNum(1)))

// // lessThan
// console.log(BigNum(1).lessThan(BigNum(0)))
// console.log(BigNum(0).lessThan(BigNum(1)))
// console.log(BigNum(1).lessThan(BigNum(100)))
// console.log(BigNum(100).lessThan(BigNum(1)))
// console.log(BigNum(0).lessThan(BigNum(100)))
// console.log(BigNum(100).lessThan(BigNum(0)))

// multiplication
// console.log(BigNum(0).times(BigNum(1)))
// console.log(BigNum(1).times(BigNum(10)))
//
// console.log(BigNum(1).times(BigNum(10)))
// console.log(BigNum(1).times(BigNum(0)))
// console.log(BigNum(1).times(BigNum(1)))
// console.log(BigNum(2).times(BigNum(3)))
// console.log(BigNum(1).times(BigNum(99)))
// console.log(BigNum(100).times(BigNum(0)))
// console.log(BigNum(100).times(BigNum(1)))
// console.log(BigNum(1).times(BigNum(99)))

// // factorial :: Number -> BigNum
// const factorial = n => {
//   let product = BigNum(1)
//   for (let i = 1; i <= n; ++i) {
//     product = product.times(BigNum(i))
//   }
//   return product
// }

// factorial(1)

console.log(BigNum(1))
