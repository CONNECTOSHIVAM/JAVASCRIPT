// Q4. Extracting property (projection)


function extractPropertyFromObject(users){
    return users.map((user)=>user.name)
}

const users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 22 },
];

console.log(extractPropertyFromObject(users));
