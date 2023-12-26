function generateFibonacci(length) {
    let fibonacciSequence = [0, 1];
    for (let i = 2; i < length; i++) {
        let nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }

    return fibonacciSequence;
}

// Taking user input for the length of the Fibonacci sequence
let length = prompt('Enter the length of the Fibonacci sequence:');
length = parseInt(length);

// Check if the input is a positive integer
if (isNaN(length) || length <= 0) {
    console.log('Invalid input. Please enter a positive integer.');
} else {
    // Generate and print the Fibonacci sequence
    let fibonacciArray = generateFibonacci(length);
    console.log('Fibonacci Sequence:', fibonacciArray);
}
