let number = document.getElementById("number")
let button = document.getElementById("button")


cal = () => {
    number.innerText = Math.random();
}
setInterval(cal,1000)