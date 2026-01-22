// Q4. Check if a number is Armstrong.

function isArmstrong(number)
{
    number = Math.abs(number)
    let boss = number 
    const len = String(number).length
    let sum = 0;
    while(number>0)
    {
        let r = number%10
        sum += Math.pow(r,len)
        number = Math.floor(number/10)
    }

    return boss === sum
}

const number = 1634
const result = isArmstrong(number);
if(result)
{
    console.log(`${number} is Armstrong Number.`);
}else{
    console.log(`${number} is not Armstrong Number.`);
}