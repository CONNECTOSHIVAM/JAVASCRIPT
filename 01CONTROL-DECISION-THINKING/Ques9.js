// Q9. Check leap year

function isLeapYear(year)
{
    if(year%4===0 && (year%100!==0 || year%400===0))
    {
        console.log(`${year} is Leap year.`);
    }else{
        console.log(`${year} is not Leap year.`);
    }
}

const year = 1600;
console.log(isLeapYear(year))
