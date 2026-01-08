// Q1.Suppose that you are developing an event management application. Given an array
//  of event data with latitude and longitude coordinates, find all events that are
//  within a specified range of latitude and longitude.

// ==== APPROACH 1 using filter:
// function findEventBasedOnRange(events,latitude,longitude){
//   return events.filter((event) => (event.lat >= latitude[0] && event.lat <= latitude[1]&&
//     event.lng >= longitude[0] && event.lng <= longitude[1])
//   )
// }

// === APPROACH 2 using the map.

function findEventBasedOnRange(events,latRange,lngRange){

  return events.map((event)=>{
    if(event.lat >= latRange[0] && event.lat <= latRange[1]&&
       event.lng >= lngRange[0] && event.lng <= lngRange[1]
    ){
      return event
    }
    //otherwise return null
    return null
  }).filter(Boolean) // remove the null value.
}

const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "London", lat: 51.5074, lng: -0.1278 }
];
const latRange = [34.0, 41.0]; 
const lngRange = [-120.0, -70.0];

const eventUnderRange = findEventBasedOnRange(events,latRange,lngRange);
console.log(eventUnderRange);
