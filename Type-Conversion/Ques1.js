// Q1. Write a program in javascript.where User input age as a string in variable 
// ageInput. Write a program to check whether the input age is valid or not.

function isValidAge(inputAge){
   
    const finalAge = parseInt(inputAge,10);

    if(isNaN(finalAge) || finalAge >= 18 )
    {
        console.log(`Age is invalid and need min age 18.`)
    }else{
        console.log(`Valid age!--Ready for next way.`)
    }
    
}


const age = '12'

isValidAge(age)