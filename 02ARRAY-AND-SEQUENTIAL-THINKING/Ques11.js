// Q.Count occurrences of an element

function occurrencesOfElements(arry,key){

    let count = 0;
    for(let i=0;i<=arry.length;i++)
    {
        if(arry[i]===key)
        {
            count++;
        }
    }
    return count
}




const arr = [1,3,5,1,5,3,7,3]
const elem = 1;
console.log(occurrencesOfElements(arr,elem));
