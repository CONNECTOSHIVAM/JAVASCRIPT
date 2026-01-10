// Q2.Write a function groupByCategory that takes an array of blog post objects and
//  groups them by their categories.

function groupByCategory(posts) {
    const group = {}

    posts.forEach((post) => {
        if (!group[post.category]) {
            group[post.category] = []
        }

        group[post.category].push(post.title)
    });

    return group
}

const posts = [
    { title: "Learn JS", category: "Programming" },
    { title: "CSS Tips", category: "Web Dev" },
    { title: "Master React", category: "Programming" },
    { title: "HTML Basics", category: "Web Dev" }
]

const result = groupByCategory(posts);
console.log(result);


