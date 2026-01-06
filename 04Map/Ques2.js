// Q2. Create a map that groups events based on their city.

function groupEventByCity(events,city){
  return events.filter((event)=>(city == event.city))
}

const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "New York", lat: 40.730610, lng: -73.935242 }
];

const myCity = "New York"

groupedCity = groupEventByCity(events,myCity)
console.log(groupedCity);
