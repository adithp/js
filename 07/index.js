let height =document.getElementById("height")
let width =document.getElementById("width")

function cla () {
    let h =window.innerHeight;
    let w =window.innerWidth;
    height.innerText = h;
    width.innerText = w;

};
window.onload = cla;
window.onresize = cla;
