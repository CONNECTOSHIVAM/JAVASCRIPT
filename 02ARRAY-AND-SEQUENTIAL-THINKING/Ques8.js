// Q.  left rotate the array by the k places || using the optimize approach.

function rotateArrByK(arr,k){

    let n = arr.length;
    k = k%n;
    function reverseTheArr(start,end)
    {
        while(start<end)
        {
            [arr[start],arr[end]] = [arr[end],arr[start]]
            start++;
            end--;
        }
    }

    reverseTheArr(0,k-1); //reverse the first k elements.
    reverseTheArr(k,n-1); //reverse the after k - remaining elemets
    reverseTheArr(0,n-1); //reverse the entire elements of arrays.

    return arr

}



const arr = [1,2,3,4,5,6,7]
const k = 2
console.log(rotateArrByK(arr,k));
