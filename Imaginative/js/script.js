const images = document.querySelectorAll(".slider .slider-line .slider-line__item");
const sliderLine = document.querySelector(".slider-line");
let count = 0;

function init() {
  width = document.querySelector(".slider").offsetWidth
  sliderLine.style.width = width * images.length + "px"
  images.forEach(item => {
    item.style.width = width + "px"
    item.style.height = "auto"
  })
  rollSlider()
}

window.addEventListener("resize", init)
init()

document.querySelector(".slider-button__next").addEventListener("click", () => {
  count++
  if (count >= images.length) {
    count = 0;
  }
  rollSlider()
})

document.querySelector(".slider-button__previous").addEventListener("click", () => {
  count--
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider()
})

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px"
}
