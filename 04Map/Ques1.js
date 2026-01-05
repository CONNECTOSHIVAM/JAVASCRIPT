// Q1.Suppose that you are developing an event management application. Given an array
//  of event data with latitude and longitude coordinates, find all events that are
//  within a specified range of latitude and longitude.

function filterEventOnRange(events,latitude,longitude){

    return events.filter((event)=>(event.lat >= latitude[0] && event.lat <= latitude[1]
        && event.lng >= longitude[0] && event.lng <= longitude[1]
    ));
}

const events = [
  { name: "Concert", city: "New York", lat: 40.0, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "London", lat: 51.5074, lng: -0.1278 }
];

const latitude = [34.0,40.50];
const longitude = [-120.0,-70.0]

const filteredEvents = filterEventOnRange(events,latitude,longitude);
console.log(filteredEvents);