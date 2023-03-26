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
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
      },
      1005: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
      },
      1487: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
      }
    },
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

// function dropwin

document.getElementById('btn_1').onclick = function() {
  document.getElementById('dropwindow-1').style.visibility = 'visible';
  document.getElementById('dropwindow-2').style.visibility = 'hidden';
  document.getElementById('dropwindow-3').style.visibility = 'hidden';
}
document.getElementById('btn_2').onclick = function() {
  document.getElementById('dropwindow-1').style.visibility = 'hidden';
  document.getElementById('dropwindow-2').style.visibility = 'visible';
  document.getElementById('dropwindow-3').style.visibility = 'hidden';
}
document.getElementById('btn_3').onclick = function() {
  document.getElementById('dropwindow-1').style.visibility = 'hidden';
  document.getElementById('dropwindow-2').style.visibility = 'hidden';
  document.getElementById('dropwindow-3').style.visibility = 'visible';
}

const links = document.querySelectorAll(".smooth");

       for (const link of links) {
       link.addEventListener("click", clickHandler);
       }

       function clickHandler(e) {
       e.preventDefault();
       const href = this.getAttribute("href");

       document.querySelector(href).scrollIntoView({
           behavior: "smooth"
       });
       }
