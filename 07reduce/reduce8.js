// Q9.One-pass statistics (stream processing)

function onePassStatistics(marks){
    return marks.reduce((acc,item)=>{
       acc.count += 1
       acc.sum += item
       acc.min = Math.min(acc.min,item) 
       acc.max = Math.max(acc.max,item)
       
       if(item>40){
         acc.passed += 1
       }else{
         acc.failed += 1
       }

       acc.avg = acc.sum /acc.count;
       return acc
    },{count: 0, sum: 0, avg: 0,min: Infinity,max: -Infinity,passed: 0,failed: 0})
       
}

const marks = [65, 70, 91, 80, 36, 55, 99];
console.log(onePassStatistics(marks));

