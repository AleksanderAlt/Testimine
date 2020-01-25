const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    const value = sum(1, 2);
    expect(value).toBe(3);
});

test('sum 1 + 4 equals 5', () => {
    expect(sum(1, 4)).toBe(5);
});

const testCases = [
    [1, 2, 3],
    [5, 4, 9],
    [10, 100, 110],
];

test.each(testCases)('sum %d + %d => %d', (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
});