const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
})

test('String reverses with Caps', () => {
  expect(reverseString('Hello')).toEqual('olleh');
})