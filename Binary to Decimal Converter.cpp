int binaryToDecimal(const std::string& binaryString) {
    int decimal = 0;
    int power = 1; // Represents 2^0 initially

    // Iterate through the binary string from right to left
    for (int i = binaryString.length() - 1; i >= 0; --i) {
        if (binaryString[i] == '1') {
            decimal += power;
        }
        power *= 2; // Move to the next power of 2 (2^1, 2^2, ...)
    }

    return decimal;
}
