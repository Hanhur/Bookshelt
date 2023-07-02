// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import image1 from '../img/funds/1-min.png';
import image2 from '../img/funds/2-min.png';
import image3 from '../img/funds/3-min.png';
import image4 from '../img/funds/4-min.png';
import image5 from '../img/funds/5-min.png';
import image6 from '../img/funds/6-min.png';
import image7 from '../img/funds/7-min.png';
import image8 from '../img/funds/8-min.png';
import image9 from '../img/funds/9-min.png';


const fundsData = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: image1,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
   img: image2,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: image3,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: image4,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: image5,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: image6,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: image7,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: image8,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: image9,
  },
];

const slider = document.querySelector('.funds-list');
const scrollDownButton = document.querySelector('.js-scroll-down');
const swiperEl = document.querySelector('swiper-container');


function createSlide(fundsData) {
  fundsData.forEach((fund, index) => {
    const slideMarkup = createSlideMarkup(fund, index);
    appendSlideMarkup(slideMarkup);
  });
}


function createSlideMarkup(fund, index) {
  const paddedIndex = String(index + 1).padStart(2, '0');
  
  return `<li class="swiper-slide">
          <div class="fund-item">
            <span class="fund-item-number">${paddedIndex}</span>
            <a href="${fund.url}" target="_blank">
              <img
                src="${fund.img}"
                alt="${fund.title}"
                class="fund-logo"
              />
            </a>
          </div>
        </li>`;
}




function appendSlideMarkup(slideMarkup) {
  slider.insertAdjacentHTML("beforeend", slideMarkup);
}

createSlide(fundsData);


const swiper = new Swiper('.swiper', {
  direction: 'vertical',
    loop: true,

  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

scrollDownButton.addEventListener("click", () => {
    if (swiper.isEnd) {
    swiper.slideToLoop(0); 
  } else {
    swiper.slideNext(); 
  }
});