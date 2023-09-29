#include <vector>

std::vector<int> generateFibonacci(int length) {
    std::vector<int> fibonacciSeq;

    if (length <= 0) {
        return fibonacciSeq; // Return an empty vector for non-positive lengths
    }

    if (length >= 1) {
        fibonacciSeq.push_back(0); // First Fibonacci number
    }
    if (length >= 2) {
        fibonacciSeq.push_back(1); // Second Fibonacci number
    }

    for (int i = 2; i < length; ++i) {
        int nextFib = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
        fibonacciSeq.push_back(nextFib);
    }

    return fibonacciSeq;
}
