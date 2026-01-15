// Q9.Reduce as “function composition” (pure scientist).

function composition(ops){
    return ops.reduce((acc,item)=>{
         return x => item(acc(x))
    },x=>x)
}

const ops = [
  x => x + 1,
  x => x * 2,
  x => x - 3
];
const composed = composition(ops)
console.log(composed(5));

