// Q7.Find GCD of two numbers

function findTheGcd(a,b)
{
    let result = Math.min(a,b)

    while(result>0)
    {
        if(a%result===0 && b%result===0)
        {
            break
        }
        result--;
    }
    return result
}


const a = 32
const b = 40
console.log(findTheGcd(a, b));
