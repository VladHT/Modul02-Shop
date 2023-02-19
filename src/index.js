import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'normalize.css'
import './styles/main.scss'

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 18,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
  });

  const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');
  
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;
  
        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
  
        inp.value = newValue;
      })
    })
  
  }
  
  counter();

var btnContainer = document.getElementById("myDIV");

var btns = btnContainer.getElementsByClassName("header__link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("header__link_active");
    current[0].className = current[0].className.replace(" header__link_active", "");
    this.className += " header__link_active";
  });
}

var btnContainer = document.getElementById("secDIV");

var btns = btnContainer.getElementsByClassName("catalog__list__items  ");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}