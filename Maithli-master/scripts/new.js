const eventImg = document.querySelector(".eventImg")
const slidesNew = document.querySelectorAll(".slideMainEve")
const mainEvePrevBtn = document.querySelector(".prevOfMainEve")
const mainEveNextBtn = document.querySelector(".nextOfMainEve")

let slideIndex = 0;

slidesNew[slideIndex].classList.add('active')

mainEvePrevBtn.addEventListener('click', prevSlide)
mainEveNextBtn.addEventListener('click', nextSlide)

function prevSlide(){

}

function nextSlide(){
    slidesNew[slideIndex].classList.remove('active')
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add('active')
    eventImg.style.transform = `translateX(-${slideIndex * 100}%)`
}