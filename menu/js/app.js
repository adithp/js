
window.onload = function () {
    let button = document.getElementById("menu-icon")
    button.addEventListener('click', function onClick() {
        let mobile_menu = document.getElementById("mobile-menu");
        mobile_menu.classList.add("active")
        let close = document.getElementsByClassName("close")
        close[0].classList.add("active")
        let overlay =document.getElementsByClassName("overlay")
        overlay[0].classList.add("active")

        close[0].addEventListener('click',function closeClick() {
            mobile_menu.classList.remove("active")
            close[0].classList.remove("active")
            overlay[0].classList.remove("active")
        })
        overlay[0].addEventListener('click',function closeClick() {
            mobile_menu.classList.remove("active")
            close[0].classList.remove("active")
            overlay[0].classList.remove("active")
        
              
        })
        
      });
      

}




