const slides = document.querySelectorAll(".slideOfMain");

let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function pre() {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImg();
}

function nex() {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slideImg();
}

function slideImg() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
