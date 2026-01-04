// Q2.Write a program in javaScript where take a phone number as a input in variable
//  phoneInput. Write a logic to validate weather the phone number is valid or not.

function isValidPhoneNumber(pNumber){
  
  const cleanedPhoneNum = String(pNumber).replace(/D/g,'');
  if(cleanedPhoneNum.length === 10)
  {
    console.log(`You Enter a valid Phone number.`)
  }else{
    console.log(`You entered is invalid phone number.`)
  }
}

const phoneNumber = 7586396452

isValidPhoneNumber(phoneNumber)