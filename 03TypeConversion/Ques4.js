// Q4. Write a program in javaScript where declare a object with variable name, age
//  and write a program to convert it into JSON string and store it in localstorage.

function saveInLocalStorage(geek) {

    const jsonData = JSON.stringify(geek);
    localStorage.setItem("User", jsonData);
    console.log("user data successfuly stored in local storage.")
}


const user = {
    name: "ConnectoShivam",
    age: "21"
}
saveInLocalStorage(user)

