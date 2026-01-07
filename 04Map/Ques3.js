//BASIC QUESTIONS ON THE MAP.
// Q1. — Double Every Number

const arr = [1, 2, 3, 4]

const myArr = arr.map((num)=>num*2)
console.log(myArr)


// Q2 — Convert Strings → Numbers

const arr1 = ["10", "20", "30"]

const intArr =arr1.map((num)=>(Number(num)));
console.log(intArr);

// Q3 — Extract Names From Objects

const user =
[
  { name: "A", age: 20 },
  { name: "B", age: 25 }
]

const usersName = user.map((u)=>u.name)
console.log((usersName));


// Q. make a cube of array.

const arr3 = [1, 2, 3, 4]

const cubedArr = arr3.map((item)=>(item**3));
console.log(cubedArr);


