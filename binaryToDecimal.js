function binaryToDecimal(binaryNumber) {
    // Using parseInt function to convert binary to decimal
    let decimalNumber = parseInt(binaryNumber, 2);
    console.log(`Decimal representation: ${decimalNumber}`);
}

// Usage
binaryToDecimal('1101'); // Output: Decimal representation: 13
