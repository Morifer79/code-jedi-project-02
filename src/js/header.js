const elBtnUser = document.querySelector(".btn-user-help");

 const elBtnUserMob=document.querySelector(".btn-user-helper")

import {userName} from './start.js';

elBtnUser.addEventListener("click", handleClick);
elBtnUserMob.addEventListener("click", handleClick)


export function handleClick() {
  if (userName??undefined) {
    userName === '';
    let marcup=`<svg width="37" height="37">
                    <use href="./images/sprite.svg#user" class="iconUser" ></use>
                </svg>
                <span class="textuserName">${userName}</span>
                <svg width="23" height="26">
                    <use href="./images/caret-down.svg" class="test"></use>
                </svg>`
    elBtnUser.innerHTML = marcup;
    elBtnUserMob.innerHTML = marcup;
    elBtnUser.style.pointerEvents = "none";
    elBtnUserMob.style.pointerEvents = "none";
  }
}


const homeLink = document.querySelector('.header-page-home');
const cartLink = document.querySelector('.header-page-shoping');
const currentLocation = window.location.href;
console.log(window.location.href);

function changeStatusPage(href) {
  if (homeLink.getAttribute('href').includes(href) || !cartLink) {
    return homeLink.classList.add('active');
  }
return cartLink.classList.add('active');
}

changeStatusPage(currentLocation);