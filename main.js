const BigNum = n => {
  const num = Array.isArray(n)
    ? n
    : typeof n === 'number'
      ? n.toString().split('')
      : ['0']

  const a = {
    num,
    empty: () => BigNum(0),
    add: x => add(x, a),
    subtract: x => subtract(x, a),
    multiply: x => multiply(x, a),
    divide: x => divide(x, a),
    compare: (byThis, x) => compare(byThis, x, a),
    length: num.length,
    inspect: () => `BigNum(${num.join('')})`
  }
  return a
}

const lastDigit = n => n.toString().split('').reverse()[0]
const firstDigit = n => n.toString()[0]

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

const subtract = ({num: a}, {num: b}) => {
  // to be continued...
}

const multiply = (a, n) => { // to refactor
  let product = BigNum(0)
  for (let i = 0; i < n; i++) { // n needs to be a BigNum as well
    product = product.concat(a)
  }
  return product
}

const divide = (a, b) => {
  // to be continued...
}

const compare = (a, b) => {
  // to be even more continued...
}

console.log(lastDigit(5), lastDigit(123))
console.log(BigNum(['1', '2', '3']))
console.log(BigNum(273).concat(BigNum(455)))
console.log(BigNum(2).multiply(2))
