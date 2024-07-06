
window.onscroll = function () {
    var backbtn = document.getElementById("BackToTop");
    var height = window.scrollY
    if (height >= 700) {
        backbtn.style.display = "flex"
    } else {
        backbtn.style.display = "none"
    }
}




var backbtn = document.getElementById("BackToTop");
backbtn.onclick = function () {
    // alert("it's Working")
    document.scrollingElement.scrollTop = "0";
}

var mobilebutton = document.getElementById("mobile_button");
var menu = document.getElementById("menu");
mobilebutton.onclick = function () {

    menu.classList.toggle("slide");
    mobilebutton.classList.toggle("fa-close");

}
