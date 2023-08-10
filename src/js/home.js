import Notiflix from 'notiflix';
import { getTopBooks } from './api';
import { loader } from './loader.js';
export const container = document.querySelector('.js-home-markup');
export const loader = document.querySelector('.loader');
const title = `<h1 class="hero-title animate-bottom">Best Sellers <span class="hero-title-accent">Books</span></h1>`;
function loaderView() {
  loader.classList.remove('hide');
}
loaderView();

homeRender();



export function homeRender() {
  getTopBooks()
    .then(data => {
      loader.classList.add('hide');
      return (container.innerHTML = title + createMarkupHome(data));
    })
    .catch(() =>
      Notiflix.Notify.failure('Failed to load books. Please try again later.')
    );
  function createMarkupHome(data) {
    const markup = data
      .map(
        data => `
    <div class="home-card-container animate-bottom">
      <h3 class="home-category-title">${data.list_name}</h3>
      <ul class="home-category-cards">
      ${data.books
        .map(
          book => `<li class="home-card" id="${book._id}">
        <div class="home-card-wrap">
        <img src="${book.book_image}" alt="${book.title} loading="lazy" width="335">
        <p class="home-card-overlay">quick view</p>
        </div>
        <h2 class="home-card-title">${book.title}</h2>
        <p class="home-card-author">${book.author}</p>
      </li>`
        )
        .join('')}
      </ul>
      <button type="button" class="home-category-btn js-seemore-btn" data-category="${
        data.list_name
      }">see more</button>
    </div>`
      )
      .join('');
    return markup;
  }
}
