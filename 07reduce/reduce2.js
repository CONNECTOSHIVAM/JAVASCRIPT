// Q3. String builder (joining with logic).


function sentenceBuilder(lines){
    return lines.reduce((acc,word)=>{
        return acc + " " + word
    }) +"!";
}

const line = ["I", "love", "reduce", "so", "much"]
const sentence = sentenceBuilder(line)
console.log(sentence);

