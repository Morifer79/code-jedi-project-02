const elBtnUser = document.querySelector(".btn-user");
import {userName} from './start.js';
// let userName="User"
elBtnUser.addEventListener("click", handleClick);

export function handleClick() {
	if (userName??undefined) {
		userName === '';
    let marcup=`<svg width="37" height="37">
                    <use href="./images/sprite.svg#user" class="test"></use>
                </svg>
                <span>${userName}</span>
                <svg width="23" height="26">
                    <use href="./images/caret-down.svg" class="test"></use>
                </svg>`
    elBtnUser.innerHTML = marcup;
	}
}