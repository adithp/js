document.addEventListener("keypress", (event) => {
   event.shiftKey && event.code == "KeyP"
    ? console.log("A")
    : console.log(" ");
});

window.addEventListener('keydown', function (event) {
    if (event.shiftKey && event.code === 'KeyC') {
        console.log("hello")
    }
});