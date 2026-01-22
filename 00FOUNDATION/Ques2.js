// Q2. Read N numbers and print their maximum

// function findMax(arrN)
// {
//     let max = -Infinity
//     // APPROACH 1:
//     // for(let i = 1; i<arrN.length; i++)
//     // {
//     //     if(arrN[i]>max)
//     //     {
//     //         max = arrN[i]
//     //     }
//     // }
//     // APPROACH 2:
//     let i = 1;
//     while(i<arrN.length)
//     {
//         if(arrN[i] > max)
//         {
//             max = arrN[i]
//         }
//         i++;
//     }
//     return max
// }

function findMax(arrN)
{
    let max = -Infinity
    let i = 0
    while(i < arrN.length)
    {
        if(arrN[i]>max)
        {
            max = arrN[i]
        }
        i++;
    }
    return max
}

const arrN = [12,23,14,56,89,75];
console.log(findMax(arrN));

