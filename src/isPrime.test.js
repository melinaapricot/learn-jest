const isPrime = require('./isPrime');

test('should identify 2 as prime', () => {
    const wasPrime = isPrime(2);
    expect(wasPrime).toBe(true);
});

test('should identify 4 as non prime', () => {
    expect(isPrime(4)).toBe(false);
});

test('should identify 11 as prime', () => {
    expect(isPrime(11)).toBe(true);
});

test('should identify 1 as NOT prime', () => {
   expect(isPrime(1)).toBe(false);
});

test('should identify 0 as NOT prime', () => {
   expect(isPrime(0)).toBe(false);
});
