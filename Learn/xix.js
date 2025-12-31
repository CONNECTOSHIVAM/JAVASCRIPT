// console.log(__dirname);
// console.log(__filename);
// console.log(process.pid);
// console.log(process.env.NODE_ENV)

const production = ["Apple", "banana", "Orange", "grape", "APPLE"];
const newArr = []
for (let item of production){
    newArr.push(item.toLowerCase())
}
console.log(newArr)