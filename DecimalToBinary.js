function decimalToBinary(decimalNumber) {
  if (typeof decimalNumber !== 'number' || isNaN(decimalNumber)) {
    console.error('Input is not a valid number.');
    return;
  }

  // Use toString with radix 2 to convert to binary
  const binaryString = decimalNumber.toString(2);
  console.log(`Binary representation of ${decimalNumber}: ${binaryString}`);
}

// Example usage:
const decimalNumber = 42;
decimalToBinary(decimalNumber);
