#include <iostream>
#include <vector>
#include <string>

std::string smashWords(const std::vector<std::string>& words) {
    std::string sentence;
    for (const std::string& word : words) {
        sentence += word + " ";
    }
    if (!sentence.empty()) {
        sentence.pop_back();
    }
    return sentence;
}
int main() {
    std::vector<std::string> words;
    std::string input;
    while (true) {
        std::cout << "Enter a word (or press Enter to finish): ";
        std::getline(std::cin, input);
        if (input.empty()) {
            break;
        }
        words.push_back(input);
    }
    std::string result = smashWords(words);

    // Print the result
    std::cout << "Resulting sentence: " << result << std::endl;
    return 0;
}
