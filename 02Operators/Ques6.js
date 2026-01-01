// Q6.Write a function calculateAnnualSalary that takes the hourly wage and the number
//  of hours worked per week, and returns the annual salary, assuming 52 working 
// weeks in a year.

function calculateAnnualSalary(charge,weeklyHr){
   const weekPerYear = 52;
   return charge*(weeklyHr*weekPerYear)
}

const hourlyWage = 50
const weeklyHour = 50

console.log(calculateAnnualSalary(hourlyWage,weeklyHour))