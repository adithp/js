
axios.get("https://reqres.in/api/users").then((response) => {
    let users = response.data.data;
            console.log(users);
            let parentUL =document.querySelector("#spote ul");
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
}).catch((err)=> {
console.log(err)
})
let form =document.querySelector("form");
let method=form.getAttribute("method");
let action=form.getAttribute("action")

form.addEventListener("submit",function (event) {
    event.preventDefault();
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;
    axios.post(action,{
        email,
        password,
    }).then((response)=> {
        console.log(response.data)
    })

})