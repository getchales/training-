const posts = [
    { title: 'post1', body: 'this is post one' },
    { title: 'post2', body: 'this is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

async function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}
createPost({ title: 'post three', body: " this is post three" })
    .then(getPosts);
async function fetchusers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}
fetchusers()
// Promise.all([promise1, promise2, promise3, promise4])
//     .then(((values) =>
//         console.log(values)));


// async function init() {
//     await createPost({ title: 'post three', body: " this is post three" })
//     getPosts();
// }
// init();


