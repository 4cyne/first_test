import capitalize from '../src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
  throw new Error('ой, что то не так')
}

if (capitalize('') !== '') {
  throw new Error('ой, что то не так')
}

console.log('тест пройден')
