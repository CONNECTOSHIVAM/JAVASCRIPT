// -------------- ADVANCE QUESTIONS ---------------

// Q8 — Map But Return Different Types
const nums = [1, 2, 3, 4, 5]

const falseType = nums.map((num)=>(num%2==0?"odd":"even"))
console.log(falseType)

// Q9 — Deep Mapping Objects


const students = [
  { name: "A", scores: [10, 20, 30] },
  { name: "B", scores: [40, 50, 60] }
];

const nameWithTotalMarks = students.map((user)=>({
    user: user.name,
    total: user.scores.reduce((acc,x)=>acc+x,0)
}))

console.log(nameWithTotalMarks)

// Q10 — Async map() + API Simulation (Conceptual)

const ids = [1, 2, 3];

async function getUser(id) {
    return "User_"+id+"_loaded"
}