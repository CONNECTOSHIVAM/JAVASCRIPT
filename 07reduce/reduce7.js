// Q8.Build index map (fast lookup)


function buildIndexMap(products){
    return products.reduce((acc,item)=> {
        acc[item.id] = {...item}
        return acc
    },{})
}

const products = [
  { id: 101, name: "Laptop", price: 50000 },
  { id: 102, name: "Mouse", price: 500 },
  { id: 103, name: "Keyboard", price: 1500 }
];

console.log(buildIndexMap(products));