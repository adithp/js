window.addEventListener("load", ()=> {
let req = new XMLHttpRequest();
req.open("GET","https://reqres.in/api/users?page=2");
req.send();
req.onload = () => {
    let responsedata = JSON.parse(req.response);
    let users = responsedata.data;
    console.log(users);
    let parentUL =document.querySelector("#spot ul");
    users.forEach((user) => {
    let newchild =document.createElement("li");
    let innerhtml =`<div class="left">
                        <img src="${user.avatar}" alt="">
                    </div>
                    <div class="right">
                        <h1>${user.first_name}${user.last_name}</h1>
                        <a href="mailto:${user.email}">${user.email}</a>
                    </div>`;
    newchild.innerHTML=innerhtml;
    parentUL.appendChild(newchild);
    })
};
req.onerror = () => {
    alert("not Loading ")
}
})
