// Q7. Left rotate the array by the K places.

function rotateTheArrayByK(arr, k)
{
   n = arr.length;
   k = k%n;
   let temp = []
   for(let i=0;i<k;i++)
   {
       temp[i] = arr[i]
   }
   for(let i = k;i<n;i++)
   {
       arr[i-k] = arr[i]
   }
   for(let i = n-k;i<n;i++)
   {
      arr[i] = temp[i-(n-k)]
   }

   return arr
}


const arr = [1,2,3,4,5]
const k = 3
console.log(rotateTheArrayByK(arr,k));
