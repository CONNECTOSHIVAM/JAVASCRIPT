// Q9. Map as mathematical function

function makeMathematical(data){
    return data.map((elem)=>({input: elem , output: Math.sqrt(elem)}))
}

const data = [1, 4, 9, 16];
console.log(makeMathematical(data));

