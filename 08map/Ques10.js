// Q10. Immutable thinking (core scientist mindset)

function immutableThinking(users){

   return users.map((user)=>{    
    let grade;
    if(user.score >= 70)
    {
        grade = "B"
    }else if(user.score >= 50 && user.score < 70)
    {
        grade = "C"
    }else{
        grade = "D"
    }

    return {...users,grade}})
}



const users = [
  { name: "A", score: 50 },
  { name: "B", score: 70 }
];

console.log(makeMathematical(users));
