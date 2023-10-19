function reverseWordsInSentence(sentence) {
   
    const words = sentence.split(" ");
    
    // Initialize an array to store reversed words
    const reversedWords = [];
    
    // Iterate through each word and reverse it
    for (const word of words) {
        const reversedWord = reverseWord(word);
        reversedWords.push(reversedWord);
    }
    
    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word into an array of characters
    const characters = word.split("");
    
    // Reverse the characters in the array
    const reversedCharacters = characters.reverse();
    
    // Join the reversed characters to form the reversed word
    const reversedWord = reversedCharacters.join("");
    
    return reversedWord;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed sentence: " + reversedSentence);
