// Q6. Print Fibonacci series.

function fibonacciSerise(num){

    let a = 0;
    let b = 1;
    let i = 2

    while(i<num)
    {
        let c = a + b
        a = b
        b = c
        i++;
    }
    return c
}





const num = 6;
console.log(fibonacciSerise(num));
