// Q1.Suppose that you are developing an event management application. Given an array
//  of event data with latitude and longitude coordinates, find all events that are
//  within a specified range of latitude and longitude.

function findCityBasedOnLatitudeLongtitude(events,latitude,longitude){

  return events.filter((event)=>
    event.lat >= latitude[0] && event.lat <= latitude[1]&&
    event.lng >= longitude[0] && event.lng <= longitude[1]
  )

}

const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "London", lat: 51.5074, lng: -0.1278 }
];

const latitude = [30.0,42.0]
const longitude = [-120,-70]

const cityData = findCityBasedOnLatitudeLongtitude(events,latitude,longitude);
console.log(cityData)