// Q5.Object reshaping (API response transform)

function employeeList(employee){
   return employee.map((user)=>({_id: user._id,fullName: user.fname + " " + user.lname}))
}


const employee = [
  { _id: 101, fname: "Shivam", lname: "Kumar" },
  { _id: 102, fname: "Amit", lname: "Shah" }
]

console.log(employeeList(employee));


