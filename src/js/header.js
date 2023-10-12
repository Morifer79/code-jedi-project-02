const elBtnUser = document.querySelector('.btn-user-help');

const elBtnUserMob = document.querySelector('.btn-user-helper');
const elMenuGrupMenu = document.querySelector('.menu-group-menu');

const elBtnUserMenuLogAut = document.querySelector('.btn-user-menu');

const elShopingList = document.querySelector('.js-shopping-cart-btn');
const elMenuGrupMob = document.querySelector('.menu-group-menu');
const elBtnUserMenuHeader = document.querySelector('.btn-user-menu-header');
export let isUser = JSON.parse(sessionStorage.getItem('userData'));
import { userName } from './start.js';

elBtnUser.addEventListener('click', function () {
  if (!isUser) {
    return handleClick;
  }
  return handleLogoutBtn;
});
elBtnUserMob.addEventListener('click', handleClick);
elBtnUserMenuLogAut.addEventListener('click', handleClickLogAut);
elBtnUserMenuHeader.addEventListener('click', handleClickLogAut);

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
    elBtnUserMenuHeader.style.display = 'inline-block';
    elBtnUser.style.border = 'none';
    elBtnUserMob.style.border = 'none';
    elBtnUserMob.style.backgroundColor = 'inherit';
  }
}
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

  if (elBtnUser.textContent.includes(`${isUser.name}`)) {
    elBtnUserMenuHeader.style.display = 'flex';
    elBtnUser.addEventListener('click', handleLogoutBtn);
    elBtnUserMob.addEventListener('click', handleLogoutBtn);
  }

  elShopingList.style.display = 'flex';
  elMenuGrupMob.style.display = 'flex';
  elBtnUser.style.border = 'none';
  elBtnUserMob.style.border = 'none';
  elBtnUserMob.style.backgroundColor = 'inherit';
} else {
  elShopingList.style.display = 'none';
  elBtnUserMenuHeader.style.display = 'none';
}

const homeLink = document.querySelector('.header-page-home');
const cartLink = document.querySelector('.header-page-shop');
const currentLocation = window.location.href;

function changeStatusPage() {
	if (currentLocation.includes('cart.html')) {
		return cartLink.classList.add('active');
  }
  return homeLink.classList.add('active');
}

changeStatusPage(currentLocation);

export function handleLogoutBtn() {
  elBtnUserMenuHeader.classList.toggle('is-hidden');
}

function handleClickLogAut() {
  sessionStorage.removeItem('userData');
  sessionStorage.removeItem('book');
  elMenuGrupMenu.style.display = 'none';
}
