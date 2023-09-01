let popup = document.getElementById("popup")
let blurEffect = document.getElementById("test")

function openPopup(){
    popup.classList.add("open-popup")
    blurEffect.classList.add("makeBlur")
}

function closePopup(){
    popup.classList.remove("open-popup")
}