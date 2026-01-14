// Q10. Immutable thinking (core scientist mindset)

function immutableThinkingAnalogy(users){

    return users.map((user)=>{

        let grade;
        if(user.score>=70)
        {
            grade = "B"
        }else if(user.score >= 50 && user.score < 70)
        {
            grade = "C"
        }else{
            grade = "D"
        }

        return {...user,grade}
    })
}
const users = [
  { name: "A", score: 50 },
  { name: "B", score: 70 }
];

console.log(immutableThinkingAnalogy(users));

