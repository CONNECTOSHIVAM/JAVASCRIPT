// Q4.Write a function calculateAge that takes the birth year and the current year,
//   and returns the age.

function calculateAge(bYear,cYear){
     return cYear-bYear;
}

const birthYear = 2006;
const currnetYear = 2026;

console.log(calculateAge(birthYear,currnetYear))