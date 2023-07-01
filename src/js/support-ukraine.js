// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import image1 from '../img/funds/1X/1-min-1X.png'
import image2 from '../img/funds/1X/2-min-1X.png'
import image3 from '../img/funds/1X/3-min-1X.png'
import image4 from '../img/funds/1X/4-min-1X.png'
import image5 from '../img/funds/1X/5-min-1X.png'
import image6 from '../img/funds/1X/6-min-1X.png'
import image7 from '../img/funds/1X/7-min-1X.png'
import image8 from '../img/funds/1X/8-min-1X.png'
import image9 from '../img/funds/1X/9-min-1X.png'
import image10 from '../img/funds/2X/8-min-2X.png'
import image11 from '../img/funds/2X/1-min-2X.png'
import image12 from '../img/funds/2X/2-min-2X.png'
import image13 from '../img/funds/2X/3-min-2X.png'
import image14 from '../img/funds/2X/4-min-2X.png'
import image15 from '../img/funds/2X/5-min-2X.png'
import image16 from '../img/funds/2X/6-min-2X.png'
import image17 from '../img/funds/2X/7-min-2X.png'
import image18 from '../img/funds/2X/9-min-2X.png'


const fundsData = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
   img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const images = [
  {
    imgX1: image1,
    imgX2: image10,
  },
  {
    imgX1: image2,
    imgX2: image11,
  },
  {
    imgX1: image3,
    imgX2: image12,
  },
  {
    imgX1: image4,
    imgX2: image13,
  },
  {
    imgX1: image5,
    imgX2: image14,
  },
  {
    imgX1: image6,
    imgX2: image15,
  },
  {
    imgX1: image7,
    imgX2: image16,
  },
  {
    imgX1: image8,
    imgX2: image17,
  },
  {
    imgX1: image9,
    imgX2: image18,
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
  const img = images[index];
  const paddedIndex = String(index + 1).padStart(2, '0');
  return `<li class="swiper-slide">
    <div class="fund-item">
      <span class="fund-item-number">${paddedIndex}</span>
      <a href="${fund.url}" target="_blank">
        <img
          src="${img.imgX1}"
          srcset="${img.imgX1} 1x, ${img.imgX2} 2x"
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
