const memoizedAdd = () => {
  const cache = {}
  return (n) => {
    if (n in cache) {
      return cache[n]
    } else {
      const result = n + 10
      cache[n] = result
      return result
    }
  }
}
const newAdd = memoizedAdd()
const result1 = newAdd(9)
const result2 = newAdd(9)


const positiveObject = {
  status: 'Activated',
  result: 5 + 2 + 10
}

const negativeObject = {
  status: 'Deactivated',
  result: 20 + 10 + 70
}

const memoizedObjectByTyoe = () => {
  const cache = {}
  return (obj, n) => {
    const { status, result } = obj
    const key = `${status}${n}`
    if (key in cache) {
      return cache[key]
    } else {
      const newResult = result * n
      cache[key] = newResult
      return newResult
    }
  }
}

const objectByType = memoizedObjectByTyoe()
const resultO1 = objectByType(positiveObject, 5)
const resultO2 = objectByType(positiveObject, 5)
const resultO3 = objectByType(negativeObject, 5)
const resultO4 = objectByType(negativeObject, 5)
const resultO5 = objectByType(positiveObject, 2)