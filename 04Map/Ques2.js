// Q2. Create a map that groups events based on their city.

// simple analogy for get ressult using the filter methoods
// function groupEventByCity(events,city){
//   return events.filter((event)=>(city == event.city))
// }

function groupEventByCity(events){
   return events.reduce((acc,event)=>{
    if(!acc[event.city]){
      acc[event.city] =  []
    }
    acc[event.city].push(event.name);
    return acc
   },{})
}


const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "New York", lat: 40.730610, lng: -73.935242 }
];

const myCity = "New York"

groupedCity = groupEventByCity(events)
// console.log(groupedCity);

//Display the grouped events
for(const city in groupedCity){
  console.log(` ${city}: [ ${groupedCity[city].join(", ")}]`)
}