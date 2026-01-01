// Q2. Write a javascript program, create a variable count and a function
//  countOccurance. The condition in which the function returns count value
//  is how many time the word appears in the comment.


function countOccurance(str,word){
    const reg = new RegExp(`\\b${word}\\b`,'gi');
    const matches = str.match(reg);
    return matches ? matches.length : 0;
}

const comment = "This product is great. The great quality is great and it's a great value.";
const wordToCount = "great"

const count = countOccurance(comment,wordToCount)
console.log(count)