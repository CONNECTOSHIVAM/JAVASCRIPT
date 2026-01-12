// Q5.Object reshaping (API response transform)

function objectReshaping(users){
    return users.map((user)=> ({id: user._id,fullName: user.fname+ " " + user.lname}))
}
const users = [
  { _id: 101, fname: "Shivam", lname: "Kumar" },
  { _id: 102, fname: "Amit", lname: "Shah" }
]

console.log(objectReshaping(users));
