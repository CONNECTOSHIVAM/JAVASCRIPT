// Q10. Find largest of three numbers

function findTheLargest(a,b,c)
{
    
    if(a>=b && a>=c)
    {
        return a
    }else if(b>=a && b>=c)
    {
        return b
    }else{
        return c
    }
}




const a = 41 
const b = 25
const c = 65
console.log(findTheLargest(a,b,c));

