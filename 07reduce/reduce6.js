// Q7.Group by property (industry real use)

function groupByProperty(users){

    return users.reduce((acc,item)=>{
         
        if(!acc[item.city])
        {
            acc[item.city]= []
        }
        acc[item.city].push(item.name)
        return acc 
    },{})
}

const users = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
  { name: "D", city: "Kolkata" }
];
console.log(groupByProperty(users));

