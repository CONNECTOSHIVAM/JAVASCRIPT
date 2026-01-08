// Q4.Write a programme to check if a city is in the Northern Hemisphere based on its latitude using maps.

const checkHemisphere = (latitude)=>{
     
    if(latitude>0){
        return "Northern Hemisphere"
    }else if(latitude<0){
        return "South Hemisphere"
    }else{
        return "On the Equator"
    }

}

const latitude = 40.730610;
console.log(checkHemisphere(latitude));