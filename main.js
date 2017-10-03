const BigNum = n => {
  const num = Array.isArray(n)
    ? n
    : typeof n === 'number'
      ? n.toString().split('')
      : ['0']

  const a = {
    num,
    empty: () => BigNum(0),
    concat: x => add(a, x),
    length: num.length,
    inspect: () => `BigNum(${num.join('')})`
  }
  return a
}

const lastDigit = n => n.toString().split('').reverse()[0]
const firstDigit = n => n.toString()[0]

const add = ({num: a}, {num: b}) => {
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

console.log(lastDigit(5), lastDigit(123))
console.log(BigNum(['1', '2', '3']))
console.log(BigNum(273).concat(BigNum(455)))
