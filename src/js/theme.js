import { imgSrcs } from "./pop-up.js";
const Theme = {
  DARK: 'dark-theme',
  LIGHT: 'light-theme',
};

const body = document.body;
const btn = document.querySelector('.js-theme-switch');
const logoLight = document.querySelector('.js-logo-light');
const logoDark = document.querySelector('.js-logo-dark');

// currentTheme();

btn.addEventListener('change', e => {
  body.classList.toggle(Theme.DARK);
  if (!e.currentTarget.checked) {
    sessionStorage.setItem('theme', Theme.LIGHT);
    logoDark.style.display = 'none';
    logoLight.style.display = 'inline-block';
    imgSrcs.amazonSrcX1 = require('../images/modal/image-1@1x.png');
    imgSrcs.amazonSrcX2 = require('../images/modal/image-1@2x.png');
  } else {
    sessionStorage.setItem('theme', Theme.DARK);
    imgSrcs.amazonSrcX1 = require('../images/modal/amazon-dark.png');
    imgSrcs.amazonSrcX2 = require('../images/modal/amazon-dark2x.png');
    logoLight.style.display = 'none';
    logoDark.style.display = 'inline-block';
  }
});

function currentTheme() {
  const savedTheme = sessionStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    body.classList.add(Theme.DARK);
    btn.checked = true;
    imgSrcs.amazonSrcX1 = require('../images/modal/amazon-dark.png');
    imgSrcs.amazonSrcX2 = require('../images/modal/amazon-dark2x.png');
    logoLight.style.display = 'none';
    logoDark.style.display = 'inline-block';
  } else {
    body.classList.remove(Theme.DARK);
    btn.checked = false;
    imgSrcs.amazonSrcX1 = require('../images/modal/image-1@1x.png');
    imgSrcs.amazonSrcX2 = require('../images/modal/image-1@2x.png');
  }
}
