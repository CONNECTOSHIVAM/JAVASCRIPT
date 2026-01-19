// Q6. Print all even numbers till N

function getEvenNumTillN(N){

    let i = 1;
    while(i<=N)
        {
            if(i%2==0)
            {
                console.log(i);
            }
            i++;
        } 
}

const N = 15;
console.log(getEvenNumTillN(N));
