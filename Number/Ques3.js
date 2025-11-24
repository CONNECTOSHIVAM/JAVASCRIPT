// Q3. Write a function formatLargeNumber that converts a large number into a user-friendly format (e.g., 1.5K, 3.5M).

function formatLargeNumber(a) {

    if (a === null || a === undefined) {
        return ''
    }
    const value = Math.abs(a)

    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + "M";
    }
    else if (value >= 1000) {
        return (value / 1000).toFixed(1) + "K";
    }
    else {
        return value.toString();
    }
}

console.log(formatLargeNumber(12500))
console.log(formatLargeNumber())
// Example usage
console.log(formatLargeNumber(1500));
console.log(formatLargeNumber(3500000));
console.log(formatLargeNumber(950)); 