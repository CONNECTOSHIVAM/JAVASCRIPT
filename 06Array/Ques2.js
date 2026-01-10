// Q2.Write a function groupByCategory that takes an array of blog post objects and
//  groups them by their categories.

function groupByCategory(posts){

    const grouped = {}

    posts.forEach((post)=>{
        if(!grouped[post.category]){
            grouped[post.category] = []
        }

        grouped[post.category].push(post.title)
    })

    return grouped

}

const posts = [
    { title: "Learn JS", category: "Programming" },
    { title: "CSS Tips", category: "WebDev" },
    { title: "Master React", category: "Programming" },
    { title: "HTML Basics", category: "WebDev" }
]

const result = groupByCategory(posts)
console.log(result)