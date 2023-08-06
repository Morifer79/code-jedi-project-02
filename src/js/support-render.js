import { supportArr } from './support-list';
import Swiper from 'swiper';

const supportList = document.querySelector('.support-list-js');
const btnSwiperDown = document.querySelector('.swiper-button__down');
const btnSwiperTop = document.querySelector('.swiper-button__top');

let activeSwiperEl = 0;

if (window.innerWidth >= 768) {
  activeSwiperEl = 3;
} else {
  activeSwiperEl = 5;
}

btnSwiperDown.addEventListener('click', () => {
  swiper.slideNext();

  if (
    supportList.children[activeSwiperEl].classList.contains(
      'swiper-slide-active'
    )
  ) {
    btnSwiperDown.hidden = true;
    btnSwiperTop.hidden = false;
  }
});

btnSwiperTop.addEventListener('click', () => {
  swiper.slidePrev();
  if (supportList.children[0].classList.contains('swiper-slide-active')) {
    btnSwiperDown.hidden = false;
    btnSwiperTop.hidden = true;
  }
});

let position = 0;
const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupCard = (
  { title, url, img },
  position
) => `<li class="support-list__item swiper-slide">
  <p class="support-number">${position}</p>
  <a class="support-list__link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
    <img
    srcset="${img}"
      src="${img}"
      alt="${title}"
      loading="lazy"
    />
  </a>
</li>`;

const markupSet = supportArr
  .map((el, i) => {
    position = addLeadingZero(i + 1);

    return markupCard(el, position);
  })
  .join('');

supportList.innerHTML = markupSet;

const swiper = new Swiper('.my-swiper', {
  direction: 'vertical',
  /* spaceBetween: 20, */
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-down',
    prevEl: '.swiper-button-top',
  },

  plugins: {
    scrollContainer: true,
  },
});
