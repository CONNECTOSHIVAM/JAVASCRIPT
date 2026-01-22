// Q3. Check if a string is palindrome

function isPalindrome(city){

    city = city.toLowerCase()
    let city1 = ""
    for(let i = city.length-1;i>=0;i--)
    {
        city1 += city[i]
    }
    
    return city === city1

}


const city = "Malayalam"
const result = isPalindrome(city);
if(result)
{
    console.log(`Malayalam is Palindrome word.`);
}else{
    console.log(`Malayalam is not Palindrome word.`);
}
