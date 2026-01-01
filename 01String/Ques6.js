// Q6. Write a program in javascript. Where create a variable text contains a string
//  with URLs. Then create the another variable urlPattern that is the regular 
// Expression matches any URL that starts with http:// or https://, 
// followed by any characters that aren't spaces.For each URL found, 
// it is replaced with an anchor tag (), making the URL clickable.

function urlTolink(txt){
   const urlPattern = new RegExp(`https?:\/\/[^\s]+`,'g')
   box = txt.replace(urlPattern,(url)=> `<a href="${url}" target="_blank">${url}</a>`);
   console.log(box);
}


const text = "Visit our website at http://example.com for more information. Also, check out https://aimerz.ai for other resources."
const link = urlTolink(text);
console.log(link);