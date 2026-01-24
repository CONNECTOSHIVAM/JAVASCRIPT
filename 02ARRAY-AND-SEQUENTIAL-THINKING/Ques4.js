// Q4. Count even and odd numbers

function countTheEvenOdd(arr)
{
    let even = 0;
    let odd = 0;
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            even += 1
        }
        else{
            odd++;
        }
    }

    return `Even Number: ${even} || Odd Number: ${odd}`
}


const arr = [12,53,75,96,45]
console.log(countTheEvenOdd(arr));





