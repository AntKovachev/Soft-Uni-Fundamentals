function smashWords(words) {
    // Join the words with spaces and return the sentence
    return words.join(' ');
}

// Usage with dynamic input from the user
let inputWords = [];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput() {
    readline.question('Enter a word (or type "done" to finish): ', word => {
        if (word.toLowerCase() === 'done') {
            const sentence = smashWords(inputWords);
            console.log('Resulting sentence:', sentence);
            readline.close();
        } else {
            // Add the word to the inputWords array and continue to get more words
            inputWords.push(word);
            getInput();
        }
    });
}

// Start getting input from the user
getInput();
