const memoizedAdd = () => {
  const cache = {}
  return (a, b) => {
    if (`${a}+${b}` in cache) {
      return cache[`${n}+${m}`]
    } else {
      const result = a + b + 10
      cache[`${a}+${b}`] = result
      return result
    }
  }
}
const newAdd = memoizedAdd()
const result1 = newAdd(9, 10)
console.log(result1)
const result2 = newAdd(9, 10)
console.log(result2)