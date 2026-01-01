// Q7.Write a program in javascript where create a three variable baseURL, searchQuery,
//  categoryFilter. By using this three variable generate the full URL of website.


function generateUrl(baseURL,searchQuery,categoryFilter){
   return baseURL.concat("?query=",searchQuery, "?category=",categoryFilter)
}


const baseURL = "https://www.example.com/search";
const searchQuery = "apple"
const categoryFilter = "eletronics"

fullUrl = generateUrl(baseURL,searchQuery,categoryFilter);
console.log(fullUrl)