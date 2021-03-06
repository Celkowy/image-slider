const imgSwitchList = {
  img: "img/img0.jpg",
}

const img = document.querySelector('img.slider');
const dots = [...document.querySelectorAll('.dots span')];
const rightArrow = document.querySelector('.sright');
const leftArrow = document.querySelector('.sleft');

const time = 4000;
let active = 0;
let numberOfSlides = dots.length; 

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const updateImg = () => {
  imgSwitchList.img = `img/img${active}.jpg`;
  img.src=imgSwitchList.img;
}

const clearPause = () => {
  clearInterval(indexInterval);
  indexInterval = setInterval(changeSlide, time);
}

const updateAll = () => {
  changeDot();
  updateImg();
  clearPause();
}

const changeSlide = () => {
  active++;
  if (active === numberOfSlides) active = 0;
  changeDot();
  updateImg();
 }

 updateImg();
let indexInterval = setInterval(changeSlide, time);

const changeSladeWithKey = (event) => {

    if(event.keyCode == 37 || event.keyCode == 65) active--;
      else if(event.keyCode == 39 || event.keyCode == 68) active++;
    
     if(active === numberOfSlides) active=0;
      else if(active < 0) active = numberOfSlides - 1;
  updateAll();
}

window.addEventListener('keydown', changeSladeWithKey);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    active = Number(dot.dataset.number);
    updateAll();
  })
})

rightArrow.addEventListener('click', () => {
  active++;
  if(active === numberOfSlides) active = 0;
  updateAll();
})

leftArrow.addEventListener('click', () => {
  active--;
  if(active === -1) active = numberOfSlides - 1;
  updateAll();
})