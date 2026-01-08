function groupEventByCity(events,city){
  return events.filter((event)=>(city == event.city))
}