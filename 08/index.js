console.log(location.href)
console.log(location.hostname)
console.log(location.pathname)
console.log(location.protocol)
let button = document.getElementById("hi")
let buttonw = document.getElementById("hiw")
button.addEventListener("click", () => {
    location.assign("https://www.google.com")
})
buttonw.addEventListener("click", () => {
    location.reload()
})