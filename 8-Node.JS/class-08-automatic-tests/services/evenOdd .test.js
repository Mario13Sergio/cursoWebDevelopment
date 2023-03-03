const evenOdd = require('./evenOdd');

const numEven = 10
const numOdd = 11

test("Cheque se o número é Par", () => {
    expect(evenOdd.chek(numEven)).toBe('even')
})

test("Cheque se o número é Impar", () => {
    expect(evenOdd.chek(numOdd)).toBe('odd')
})