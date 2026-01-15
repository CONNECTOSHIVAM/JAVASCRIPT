// // Q6. Flatten 2D array

function flattenArray(matrix){

    return matrix.reduce((acc,a)=>{
         acc.push(...a)
         return acc
    },[])
}


const matrix = [[1,2], [3,4,5], [], [6]];
console.log(flattenArray(matrix));
