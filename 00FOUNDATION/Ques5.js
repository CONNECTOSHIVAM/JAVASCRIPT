// Q5. Print all even numbers till N

function getEvenNumTillN(N){

    let i = 2;
    while(i<=N)
        {
          console.log(i);
          i += 2      
        } 
}

const N = 15;
console.log(getEvenNumTillN(N));
