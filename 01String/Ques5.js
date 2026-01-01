// Q5.Write a program in javascript. Where create a variable phoneNumber .phoneNumber
//  contains the user input, but it has unwanted spaces at the start and end.
// Than create cleanedPhoneNumber variable which holds the processed,
//  clean phone number without extra spaces..

function cleanedPhoneNumber(pNumber){
    return pNumber.trim()
}

const phoneNumber = "  +1 75 85989 65652  ";
const cleanNumber = cleanedPhoneNumber(phoneNumber)

console.log(cleanNumber);