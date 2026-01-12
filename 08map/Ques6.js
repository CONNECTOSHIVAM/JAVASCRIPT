// Q6. Index-aware transformation

function indexAwareTransformation(fruits){

    return fruits.map((item,index)=> `${index+1}. ${item}`)
}

const fruits = ["apple", "banana", "orange"]
console.log(indexAwareTransformation(fruits));

