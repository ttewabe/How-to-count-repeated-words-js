// Create a function that takes a string containing one or more sentences, and return an object that lists all words that appear more than once, and the number of times they appear. Upper and lower case should count as the same word. For example, "The quick brown fox jumps over the lazy dog. A dog should not be so lazy, whether the fox is quick or not. The fox knows what it's doing." should return the following:
// {
//   the: 4,
//   quick: 2,
//   fox: 3,
//   lazy: 2,
//   dog: 2,
// }

console.log("~~~~~~~~~~~~~~~~~~~~ TASK 1~~~~~~~~~~~~~~~~~~~~~~~~");

let string = "The quick brown fox jumps over the lazy dog. A dog should not be so lazy, whether the fox is quick or not. The fox knows what it's doing.";

const countMultipleWords = (str) => {
    // Remove punctuation before starting
    let noPunctuationVersion = str.split('.').join('').split(',').join('')
    
    // Make everything lowercase
    let lowerCaseVersion = noPunctuationVersion.toLowerCase()
    
    // Break string into an array
    const stringAsArray = lowerCaseVersion.split(' ')


    // Declare an answer object to work with
    const answer = {}

    // At each word, either start a count or increment it if it exists
    stringAsArray.forEach(word => {
        if (answer[word]) { // If the word already exists as a key in our answer object
            answer[word] = answer[word]+1 // Increment what's there
        } else { // If the answer object doesn't have that word yet
            answer[word] = 1 // Start it at 1
        }});

    // Now EVERY word is in the object, so we have to trim it
    Object.keys(answer).forEach(wordKey => { // the keys part lets us treat the object like an array, and do a forEach
        if (answer[wordKey] === 1) { // IF that word only had 1 count...
            delete answer[wordKey] // remove that property from the answer object entirely
        }
    })

    return(answer)

}

console.log(countMultipleWords(string))




//Option Two
console.log("                                                ");
console.log("~~~~~~~~~~~~~~~~~~~~ TASK 1~~~~~~~~~~~~~~~~~~~~~~~~");

function wordCount(sentence){
   //const words = sentence.toLowerCase().split('.').join('').split(',').join('').split(' ')
     const words = sentence.replace(/[^\w\s]/g, "").toUpperCase().split(' ')
    const dictionary =[];

    //filter 
    for(let i =0; i< words.length; i++){
        const count = words.filter(x => x === words[i]);

        if(!dictionary.find(x => x.word === words[i]))
            dictionary.push({word:words[i], count:count.length});    
    }

    //  display
    dictionary.map(x => {
        if(x.count > 1)
            console.log(`${x.word} ${x.count}`);
    });
}
const example = "The quick brown fox jumps over the lazy dog. A dog should not be so lazy, whether the fox is quick or not. The fox knows what it's doing."

wordCount(example);



console.log("                                                ");
console.log("~~~~~~~~~~~~~~~~~~~~ TASK 1~~~~~~~~~~~~~~~~~~~~~~~~");
let word1 = "I am not gonna live forever, but I wanna live while I am alive";

function countRepeatedWords(sentence) {
  let word1 = sentence.toUpperCase().split(" ");
  let wordMap = {};

  for (let i = 0; i < word1.length; i++) {
    let currentWordCount = wordMap[word1[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[word1[i]] = count + 1;
  }
  return wordMap;
}

console.log(countRepeatedWords(word1));