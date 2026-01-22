// Q7. Reverse a number

// function reverseTheNumber(num){
//    let digits = Math.abs(num)
//    let rev = 0;

//    while(digits>0)
//    {
//       const lastDigit = digits%10
//       rev = rev * 10 + lastDigit
//       digits = Math.floor(digits / 10)
//    }
//    return num < 0? -rev : rev

// }

function reverseTheNumber(num){

   num = Math.abs(num)
   let rev = 0
   while(num > 0)
   {
      n = num % 10
      rev = rev * 10 + n
      num = Math.floor(num/10)
   }

   return rev
}

const num = 52352;
console.log(reverseTheNumber(num));
