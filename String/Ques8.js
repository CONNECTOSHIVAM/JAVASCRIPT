// Q8. Write a program in js where you have given a array validExtensions .Which 
// contain the all valid extension.Write a function validateFileExtension to 
// check the valid file type.


function validateFileExtension(filename){
   const validExtension = ['.jpg','.jpeg','.gif','.png'];
   const isValid = validExtension.some(extension => filename.toLowerCase().endsWith(extension));
   console.log(isValid ? "You can upload this file" : "this file extension is not supported.")
}


validateFileExtension("myone.gif")










// -----------------------------------------------------------

// function validateFileExtension(filename){
//    newFile = filename.split('.')[1]
//    if(newFile.toLowerCase() == 'jpg'){
//       console.log(`vaild file and his extension is jpg --- Now you can upload.`)
//    }else{
//       console.log(`you upload ${newFile} extension file -- Not valid (Please Upload jpg file.)`)
//    }
// }

// validateFileExtension('myone.jpeg')