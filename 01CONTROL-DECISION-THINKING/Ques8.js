// Q8.Find LCM of two numbers

function findLcm(a,b)
{
    let max = Math.max(a,b);
    let min = Math.min(a,b)
    for(let i = max; i <= a*b; i += max)
    {
        if(i%min===0)
        {
            return i
        }
    }
    return a*b
}



const a = 16;
const b = 24;
console.log(findLcm(a,b));
