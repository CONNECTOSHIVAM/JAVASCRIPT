// Q6. Create an array of user objects, each containing name (string) age (number)
// email (string) Iterate through the array and display the user information in a
//  formatted manner.


function displayUserDetails(users){
    
    console.log("List of Users:");
    users.forEach((user,index)=>{
       console.log(`${index+1}.Name: ${user.name}`);
       console.log(`Age: ${user.age}`);
       console.log(`Email: ${user.email}`);
       console.log(`------------------------------`);
    })
}


const users = [
 { name: "John Doe", age: 30,email: "john.doe@example.com" },
{ name: "Jane Smith", age: 25,email: "jane.smith@example.com" },
 { name: "Alice Johnson", age: 35,email: "alice.johnson@example.com" },
{ name: "Bob Brown", age: 40, email: "bob.brown@example.com" }
];

console.log(displayUserDetails(users))
