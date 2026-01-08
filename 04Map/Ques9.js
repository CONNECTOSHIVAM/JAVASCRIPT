// Q.6 Write a program to identify events that are happening on the current date.
function getTodayEvent(events){

    const date = new Date().toISOString().split('T')[0]
    return events.filter((e)=>(e.date === date)).map((e=>e.name))
     
}

const events = [
  { name: "Music Festival", date: "2024-12-24", lat: 40.7128, lng: -74.0060 },
  { name: "Art Exhibition", date: "2024-12-23", lat: 34.0522, lng: -118.2437 },
  { name: "Tech Meetup", date: "2026-01-08", lat: 37.7749, lng: -122.4194 },
];

const todayEventList = getTodayEvent(events)
console.log(`Events Happening Today: ${todayEventList}`)

