// Q9.One-pass statistics (stream processing)

function onePassStatistics(marks){
    return marks.reduce((acc,item)=>{
       acc.count += 1
       acc.sum += item
       acc.avg = acc.sum /acc.count;
       acc.min = Math.min(acc.min,item) 
       acc.max = Math.max(acc.max,item)
       acc.passed = item>=40
       acc.failed = item <40
    },{})
}

const marks = [65, 70, 91, 80, 36, 55, 99];
console.log(onePassStatistics(marks));

