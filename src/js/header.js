const elBtnUser = document.querySelector(".btn-user-help");

 const elBtnUserMob=document.querySelector(".btn-user-helper")
// const elBtnTheme = document.querySelector(".btn-theme");
import {userName} from './start.js';
// let userName="User"
elBtnUser.addEventListener("click", handleClick);
elBtnUserMob.addEventListener("click", handleClick)
// elBtnTheme.addEventListener("click", switcherClick)

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
  }
}