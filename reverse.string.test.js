// questions extrêmes 
const {
    reverseString
} = require('./reverse.string.js')


test('If send null', () => {
    expect(reverseString('')).toBe('')
})

test('If send hello', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('If send a', () => {
    expect(reverseString('a')).toBe('a')
})

test('If send 145', () => {
    expect(reverseString('145')).toBe('541')
})

test('If send (int)145', () => {
    expect(reverseString(145)).toBe('541')
})

test('If send multiple spaces', () => {
    expect(reverseString('  ')).toBe('  ')
})

test('If send specials characters', () => {
    expect(reverseString('!+/.?<|>')).toBe('>|<?./+!')
})

test('If send uppercase characters', () => {
    expect(reverseString('John')).toBe('nhoJ')
})