const sumCheck = require('./sumCheck')

test('Sum elements present', () => {
    expect(sumCheck([1,2,3])).toBe(false);
});

test('Sum elements not present', () => {
    expect(sumCheck([66, 99, 31, 42])).toBe(true);
});

test('Empty Array', () => {
    expect(() => sumCheck([])).toThrow(Error);
});

test('Array containing null', () => {
    expect(() => sumCheck([6, 65, 864, null, undefined])).toThrow(Error);
});

test('Array containing undefined', () => {
    expect(() => sumCheck([6, 65, 864, 10, undefined])).toThrow(Error);
});

test('Array containing NaN', () => {
    expect(() => sumCheck([6, 65, 864, NaN])).toThrow(Error);
});

test('Array containing strings', () => {
    expect(() => sumCheck(['a', 'b', 'c'])).toThrow(Error);
});