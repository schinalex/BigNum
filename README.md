# BigNum
Trying to create a BigNum monoid to contain really big numbers.

P.S. Naive implementation - storing the number as an array of strings (example: `['9', '8', '9']`).<br/>
     I'm also not concerned about performance or memory usage for now.


# Addition
Addition is done by using the "concat" method on the BigNum object.

Example:

```javascript
  const x = BigNum(5).concat(BigNum(5))
  console.log(x) // => BigNum(10)
```
