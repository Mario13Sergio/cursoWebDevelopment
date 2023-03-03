const math = require('./math');

const num1 = 1
const num2 = 2

test("Somar total de bags - Ex: 1 + 2 = 3", () => {
    expect(math.sum(num1, num2)).toBe(3)
});

test("Subtrção de bags  - Ex: 1 - 2 = -1", () => {
    expect(math.sub(num1, num2)).toBe(-1)
});
test("Multiplicação de bags  - Ex: 1 * 2 = 2", () => {
    expect(math.mult(num1, num2)).toBe(2)
});
test("Divisao de bags  - Ex: 1 / 2 = 0.5", () => {
    expect(math.div(num1, num2)).toBe(0.5)
});