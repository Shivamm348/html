const slides = document.querySelectorAll(".slide");

let counter = 0;

slides.forEach(
    (slide,index) =>{
        slide.style.left = `${index * 100}%`
    }
)

const prev = () => {
    counter--
    if(counter<0){
        counter = 9;
    }
    else{
        slideImg()
    }
    
}


const next = () => {
    counter++
    if(counter>9){
        counter = 0
    }
    else{
        slideImg()
    }
}

const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
                }
    )
}






