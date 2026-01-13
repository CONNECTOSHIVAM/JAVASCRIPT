// Q7.Nested mapping (matrix)

function nastedMapping(matrix){

    return matrix.map(([a,b])=>[a*2 , b*2])
}


const matrix = [
  [1, 2],
  [3, 4]
];

console.log(nastedMapping(matrix));

