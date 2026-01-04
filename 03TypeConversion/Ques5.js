// Q5.Write a program in javaScript where create a variable currentDate and declare
//  the current date by using Date constructor.Write a program to convert the date 
// in string formate.


function getCurrentDateString(){
    
    //get the current date and time.
    let currentDate = new Date();
    
    let currentDateString = currentDate.toString();

    return currentDateString

}

console.log(getCurrentDateString())

