// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const fundsData = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../img/funds/funds-png-2/1-min.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../img/funds/funds-png-2/2-min.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../img/funds/funds-png-2/3-min.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../img/funds/funds-png-2/4-min.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../img/funds/funds-png-2/5-min.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../img/funds/funds-png-2/6-min.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../img/funds/funds-png-2/7-min.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../img/funds/funds-png-2/8-min.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../img/funds/funds-png-2/9-min.png',
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
  
  return `<div class="swiper-slide">
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
        </div>`;
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