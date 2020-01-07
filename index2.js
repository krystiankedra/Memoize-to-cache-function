const multipler = factory => {
  const buffer = {}
  return x => {
    const key = `${factory}${x}`
    if (key in buffer) {
      return buffer[key]
    }
    const result = factory * x
    buffer[key] = result
    return result
  }
}

const doubler = multipler(2)
doubler(3)
doubler(3)
doubler(3)


///////////////////////////////

const sortMathArryByType = (arr, type) =>
  [...arr].sort((prev, next) => {
    return type === 'ASC'
      ? prev > next ? 1 : -1
      : prev > next ? -1 : 1
  })

const memoizedSortedMathArr = mathArr => {
  const buffer = {}
  return type => {
    if (type in buffer) {
      console.log('tak')
      return buffer[type]
    }
    const result = sortMathArryByType(mathArr, type)
    buffer[type] = result
    return result
  }
}

const mathArr = [7, 2, 4, 10, 6, 7, 2, 4, 10, 6, 7, 2, 4, 10, 6, 7, 2, 4, 10, 6, 7, 2, 4, 10, 6]

const sortBuffer = memoizedSortedMathArr(mathArr)
const sortedASC1 = sortBuffer('ASC')
console.log(sortedASC1)
const sortedDESC1 = sortBuffer('DESC')
console.log(sortedDESC1)
const sortedASC2 = sortBuffer('ASC')
console.log(sortedASC2)
const sortedDESC2 = sortBuffer('DESC')
console.log(sortedDESC2)





