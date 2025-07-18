export const capitalize = (str) => {
  if (str === '') {
    return 'F'
  }
  const lowerCaseStr = str.toLowerCase()
  const firstLetter = lowerCaseStr.slice(0, 1).toUpperCase()
  return firstLetter + lowerCaseStr.slice(1, lowerCaseStr.length)
}

console.log(capitalize(''))

export default capitalize
