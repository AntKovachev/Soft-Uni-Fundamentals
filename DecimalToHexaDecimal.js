function decimalToHexadecimal(decimalNumber) {
  if (typeof decimalNumber !== 'number' || isNaN(decimalNumber)) {
    console.error('Input is not a valid number.');
    return;
  }

 
  const hexadecimalString = decimalNumber.toString(16);
  console.log(`Hexadecimal representation of ${decimalNumber}: ${hexadecimalString}`);
}



decimalToHexadecimal(decimalNumber);
