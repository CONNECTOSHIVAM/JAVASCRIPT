// ----- INTERMEDIATE QUESTIONS ON MAPS ------------------

// Q4 — Attach Index to Each Value

const arr = ["apple", "banana", "mango"]

const newArr = arr.map((item,index)=>(`${index}: ${item}`))
console.log(newArr);

// Q5 — Add New Property Without Changing Original

const reportCard = [
  { name: "A", marks: 70 },
  { name: "B", marks: 90 }
]

const passedReport = reportCard.map((user)=>({...user,passed: user.marks>=80}))
console.log(passedReport);

// Q6 — Convert Array of Full Names to First Names.

const fullNames = ["Rahul Kumar", "Aman Sharma", "Sita Verma"]

const firstName = fullNames.map((name)=>name.split(' ')[0])
console.log(firstName);

// Q7 — Format Prices

const priceWithOutSign = [100, 250, 999]

const priceWithSign = priceWithOutSign.map((price)=>(`₹${price}`))
console.log(priceWithSign);


