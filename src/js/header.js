const elBtnUser = document.querySelector('.btn-user-help');

const elBtnUserMob = document.querySelector('.btn-user-helper');
const elMenuGrupMenu = document.querySelector('.menu-group-menu');

const elBtnUserMenuLogAut = document.querySelector('.btn-user-menu');
// const elTextUserName = document.querySelector(".textuserName");

const elShopingList = document.querySelector('.js-shopping-cart-btn');
const elMenuGrupMob = document.querySelector('.menu-group-menu');
// const elBtnUserMenuHeader = document.querySelector('.btn-user-menu-header');

import { userName } from './start.js';

elBtnUser.addEventListener('click', handleClick);
elBtnUserMob.addEventListener('click', handleClick);
elBtnUserMenuLogAut.addEventListener('click', handleClickLogAut);
// elBtnUserMenuHeader.addEventListener("click", handleClickLogAut)

// let isUser = '';

let marcup = '';

export function handleClick() {
  if (userName ?? undefined) {
    userName === '';
    marcup = `<svg width="37" height="37">
                    <use href="./images/sprite.svg#user" class="iconUser" ></use>
                </svg>
                <span class="textuserName" style="color:white">${userName}</span>
                <svg width="23" height="26">
                    <use href="./images/caret-down.svg" class="test"></use>
                </svg>`;
    elBtnUser.innerHTML = marcup;
    elBtnUserMob.innerHTML = marcup;
    elBtnUser.style.pointerEvents = 'none';
    elBtnUserMob.style.pointerEvents = 'none';

    elBtnUser.style.border = 'none';
    elBtnUserMob.style.border = 'none';
    elBtnUserMob.style.backgroundColor = 'inherit';
    // elBtnUserMenuHeader.style.display = "flex";
  }
  // if (isUser) {
  //   elBtnUserMenuHeader.style.display = "flex";
  //   // elBtnUser.style.pointerEvents = "none";
  // }
}

function handleClickLogAut() {
  sessionStorage.removeItem('userData');
  sessionStorage.removeItem('Data');
  elMenuGrupMenu.style.display = 'none';
}

export let isUser = JSON.parse(sessionStorage.getItem('userData'));

if (isUser) {
  marcup = `<svg width="37" height="37">
                    <use href="./images/sprite.svg#user" class="iconUser" ></use>
                </svg>
                <span class="textuserName" style="color:white">${isUser.name}</span>
                <svg width="23" height="26">
                    <use href="./images/caret-down.svg" class="test"></use>
                </svg>`;
  elBtnUser.innerHTML = marcup;
  elBtnUserMob.innerHTML = marcup;
  elBtnUser.style.pointerEvents = 'none';
  elBtnUserMob.style.pointerEvents = 'none';

  elShopingList.style.display = 'flex';
  elMenuGrupMob.style.display = 'flex';

  elBtnUser.style.border = 'none';
  elBtnUserMob.style.border = 'none';
  elBtnUserMob.style.backgroundColor = 'inherit';
} else {
  elShopingList.style.display = 'none';
}

const homeLink = document.querySelector('.header-page-home');
const cartLink = document.querySelector('.header-page-shop');
const cartItem = document.querySelector('.js-shopping-cart-btn');

const currentLocation = window.location.href;

if (currentLocation.includes(cartLink.getAttribute('href'))) {
  cartItem.classList.add('active');
  homeLink.classList.remove('active');
}
