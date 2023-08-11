import { loader } from './loader.js';
import { imgSrcs } from './pop-up.js';

const BOOKS_DATA_KEY = 'books-data';
const bookArray = JSON.parse(sessionStorage.getItem(BOOKS_DATA_KEY)) || [];

const cartTitle = `<h2 class="shopping-list-card__hdr">Shopping <span class="shopping-list-card__title-spn">List</span></h2>`;
const shoppingListContainer = document.querySelector(
  '.shopping-list-container'
);

function renderShoppingList() {
  shoppingListContainer.innerHTML = '';
  if (!bookArray.length) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty_msg';
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'empty_div';
    emptyMessage.textContent =
      'This page is empty, add some books and proceed to order.';
    shoppingListContainer.appendChild(emptyMessage);
    shoppingListContainer.appendChild(emptyDiv);
    loader.classList.add('hide');
    return;
  }
  loader.classList.add('hide');
  return (shoppingListContainer.innerHTML = createMarkupShop(bookArray));
}

if (window.location.href.includes('cart.html')) {
  loader.classList.remove('hide');
  renderShoppingList();
  shoppingListContainer.addEventListener('click', event => {
    if (
      event.target.classList.contains('shopping-list-card__remove-btn') ||
      event.target.classList.contains('shopping-list-card__remove-btn__icon')
    ) {
      const bookIndex = bookArray.find(
        el => el._id === event.target.getAttribute('id')
      );
      if (bookIndex !== -1) {
        bookArray.splice(bookIndex, 1);
        sessionStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(bookArray));
        renderShoppingList(bookArray);
      }
    }
  });
}

function createMarkupShop(arr) {
  const markup =
    cartTitle +
    arr
      .map(
        book => `
  <div class="shopping-list-card">
      <img src="${book.book_image}" alt="${book.title}" class="shopping-list-card__image">
    <div class="shopping-list-card_info">  
      <h3 class="shopping-list-card__title">${book.title}</h2>
      <p class="shopping-list-card__category">${book.list_name}</p>
      <p class="shopping-list-card__description">${book.description}</p>
      <p class="shopping-list-card__author">${book.author}</p>
        <div class="shopping-list-card__links">
        <ul class="shopping-list-card__linksul">
          <li><a href="${book.buy_links[0].url}" target="_blank"><img src="${imgSrcs.amazonSrcX1}" alt="${book.buy_links[0].name}" srcset="${imgSrcs.amazonSrcX1} 1x, ${imgSrcs.amazonSrcX2} 2x"></a></li>
          <li><a href="${book.buy_links[1].url}" target="_blank"><img src="${imgSrcs.appleBooksSrcX1}" alt="${book.buy_links[1].name}" srcset="${imgSrcs.appleBooksSrcX1} 1x, ${imgSrcs.appleBooksSrcX2} 2x"></a></li>
          <li><a href="${book.buy_links[2].url}" target="_blank"><img src="${imgSrcs.barnesAndNobleSrcX1}" alt="${book.buy_links[2].name}" srcset="${imgSrcs.barnesAndNobleSrcX1} 1x, ${imgSrcs.barnesAndNobleSrcX2} 2x"></a></li>
        </ul>
        </div>
    </div>
      <button class="shopping-list-card__remove-btn" type="button" id="${book._id}">
      <svg class="shopping-list-card__remove-btn__icon" width="18" height="18">
      <use href="./images/trash"></use>
    </svg>
    </button>
  </div>
  `
      )
      .join('');
  return markup;
}