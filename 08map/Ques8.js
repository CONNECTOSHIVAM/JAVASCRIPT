// Q8. Function mapping (higher-order thinking)

function highOrderMapping(funcs,value){
    return funcs.map((fn)=>fn(value))
}

const funcs = [
  x => x + 1,
  x => x * 2,
  x => x * x
];
const value = 3

console.log(highOrderMapping(funcs, value));

