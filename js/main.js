const text = document.querySelector('.text');
const img = document.querySelector('.section-projects__inner-content_image_file');
const prevBtn = document.querySelector('.section-projects__inner-content_info-navigation-left_arrow');
const nextBtn = document.querySelector('.section-projects__inner-content_info-navigation-right_arrow');
const indicator = document.querySelectorAll('.section-projects__inner-content_info-navigation-item');
const links = document.querySelectorAll('.section-projects__inner-link');
const city = document.getElementById('city');
const apartmentArea = document.getElementById('apartmentArea');
const repairTime = document.getElementById('repairTime');

const entities = [
  {
    city: 'Rostov-on-Don<br>LCD admiral',
    apartmentArea: '81 m2',
    repairTime: '3.5 months',
    link: './images/projects-image.jpg',
  },
  {
    city:'Sochi <br> Thieves',
    apartmentArea: '105 m2',
    repairTime: '4 months',
    link: './images/projects-image-2.jpg',
  },
  {
    city: 'Rostov-on-Don <br> Patriotic',
    apartmentArea: '93 m2',
    repairTime: '3 months',
    link: './images/projects-image-3.jpg',
  }
]
currentIndex = 0;

//Автоматическая Смена Слайдов
let autoSlider = setInterval(()=>{
  if (currentIndex > 2){
    currentIndex = 0;
  }
  else{ 
    slider()
    currentIndex++;
  }
},3000);

//Кнопки Смены Слайдов

prevBtn.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0){
      currentIndex = 2;
  }
  slider(); 
})

nextBtn.addEventListener('click', () => {
  currentIndex +=1;
  if (currentIndex > 2){
      currentIndex = 0;
  } 
  slider(); 
})

for (let i = 0; i < indicator.length;i++ ){
  indicator[i].addEventListener('click', () => {
    currentIndex = i;
    slider(); 
  })
}

for (let i = 0; i < links.length;i++ ){

  links[i].addEventListener('click', () => {
    currentIndex = i;
    slider(); 
  });
}
//Функция Смены Слайдов
function slider() {
  indicator.forEach((i) =>{
    i.classList.remove('item_active');
  });
  
  links.forEach((i) =>{
    i.classList.remove('active');
  });

  indicator[currentIndex].classList.add('item_active');
  links[currentIndex].classList.add('active');

  img.src = `${entities[currentIndex].link}`;
  city.innerHTML = `${entities[currentIndex].city}`;
  apartmentArea.innerHTML = `${entities[currentIndex].apartmentArea}`;
  repairTime.innerHTML = `${entities[currentIndex].repairTime}`;
  
}
