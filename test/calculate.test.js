const calculate = require('../calculate')

test('calculate outputs square of a number', () => {
  expect(calculate(3)).toBe(9)
})

test('calculate outputs square of a number', () => {
  expect(calculate(-4)).toBe(16)
})