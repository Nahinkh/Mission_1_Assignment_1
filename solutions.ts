// Solutions of problems 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
}

const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Solutions of problems 2:
const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}
const reversed = reverseString("typescript");