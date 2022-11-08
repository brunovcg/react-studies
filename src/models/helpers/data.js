export function getRandomNumberBetween(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue)
}

export function getDescendantProp(obj, desc) {
  const arr = desc.split('.')
  while (arr.length && (obj = obj[arr.shift()]));
  return obj
}

export const createArray = () => Array.from(Array(5), (x, i) => i + 1)

function mask(value, pattern) {
  let i = 0
  const stringify = value.toString()

  return pattern.replace(/#/g, () => stringify[i++] || '')
}

// e.g. console.log(mask(81988335138, '(##) #.####-####'))
