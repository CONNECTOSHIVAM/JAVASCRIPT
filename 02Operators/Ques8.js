// Q8. Write a function calculateTimeDifference that takes two times
//  (in 24-hour format) as strings and returns the difference in hours.

function calculateTimeDifference(day,night){
   const [hour,minutes] = day.split(':').map(Number);
   const [hour1, minutes1] = night.split(':').map(Number);
   const totalMinutes1 = hour*60 + minutes;
   const totalMinutes2 = hour1*60 + minutes1;
   const differenceInMinutes = Math.abs(totalMinutes2-totalMinutes1);
   const finalHour = Math.floor(differenceInMinutes/60);
   const finalMinutes = differenceInMinutes%60
   
   return `${finalHour}:${finalMinutes.toString().padStart(2,'0')}`
}

console.log(calculateTimeDifference("07:45","08:45"))

