const imgSwitchList = {
  img: "img/img0.jpg",
}

const img = document.querySelector('img.slider');
const dots = [...document.querySelectorAll('.dots span')];
const rightArrow = document.querySelector('.sright');
const leftArrow = document.querySelector('.sleft');

const time = 2000;
let active = 0;
let numberOfSlides = 7; 

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const updateImg = (dot) => {
  active = Number(dot.dataset.number);
  imgSwitchList.img = `img/img${active}.jpg`;
  img.src=imgSwitchList.img;
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    updateImg(dot);
    changeDot();
  })
})

rightArrow.addEventListener('click', () => {
  active++;
  if(active === numberOfSlides) active = 0;
  imgSwitchList.img = `img/img${active}.jpg`;
  img.src=imgSwitchList.img;
  changeDot();
})

leftArrow.addEventListener('click', () => {
  active--;
  if(active === -1) active = numberOfSlides - 1;
  imgSwitchList.img = `img/img${active}.jpg`;
  img.src=imgSwitchList.img;
  changeDot();
})

