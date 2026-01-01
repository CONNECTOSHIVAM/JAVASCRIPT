// Q3.Write a function formatLargeNumber that converts a large number into a 
// user-friendly format (e.g., 1.5K, 3.5M).

function formatLargeNumber(num){
    if(num>=1000 && num < 1000000){
        return (num/1000).toFixed(1)+"K";
    }else if(num>=1000000){
        return (num/1000000).toFixed(1)+"M"
    }else{
        return num.toString()
    }
}

console.log(formatLargeNumber(1245))
