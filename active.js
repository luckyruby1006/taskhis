var iconNavbar = document.querySelector(".navbar__icon")
var navbarBackground = iconNavbar.nextElementSibling
var navbarList = navbarBackground.nextElementSibling
var navbarLogin = navbarList.nextElementSibling

iconNavbar.addEventListener('click',function(e){
navbarBackground.style.display = "block"
navbarList.style.display = "block"
navbarLogin.style.display = "block"
setTimeout(function(){
    navbarBackground.style.display = "none"
    navbarList.style.display = "none"
    navbarLogin.style.display = "none"
},10000)
})
