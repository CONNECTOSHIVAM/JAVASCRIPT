// Q5. Write a function countTags that takes an array of tags and counts how many 
// times each tag appears.

function countTags(tags){

    return tags.reduce((acc,item)=>{
        
        acc[item] = (acc[item] || 0)+1
        return acc
    },{})
}


const tags = ["css", "html", "css", "js", "html", "js", "js"];

console.log(countTags(tags));
