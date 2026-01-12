// Q2. String formatting

function stringFormatting(names){
    return names.map((name)=> name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
}

const names = ["shivam", "rohan", "amit"]
console.log(stringFormatting(names));



