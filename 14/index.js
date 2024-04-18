posts = [
    {
        a:"Hello",
        b:"Adith",
    },
    {
        a:"hel",
        b:"roshin",
    },
];

function viewPosts() {
    setTimeout(()=> {
        let html_content="";
        posts.map((post)=> {
            html_content += `<p>${post.a}</p><h1>${post.b}</h1>`
        });
        document.body.innerHTML = html_content;
    },1000);
}


post = {
    a:"Hey",
    b:"sojay",
}

function addPost(post,callback) {
    setTimeout(()=>{
        posts.push(post)
        callback();
    },2000)
}

addPost(post,viewPosts);
