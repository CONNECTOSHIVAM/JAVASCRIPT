// Q4. Write a javascript program. Where create a variable email and assign the some 
// email address in it.Then create a variable domain. After that check the email
//  contain the domain.If it finds the domain within the email, it returns the
//  position where domain starts. If not, it returns -1.


function isValidEmail(mail,domains){
   const position = mail.indexOf(domains);
   if(position !== -1){
      console.log(`The email is from gmail and start index from  ${position}`)
   }else{
      console.log(`The email is from gmail it from ${mail.split('@')[1]} and position is - ${position}`)
   }
}


const email = "shivam@momsnanhi.com"
const domain = "@gmail.com"

isValidEmail(email,domain)