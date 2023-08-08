import { getSeparateCategories } from './api';
import { container } from './home.js';
import { categoriesList } from './allCategories-render'
import { loader } from './home.js';
import { homeRender } from './home.js';
// const categoryLinks = document.querySelectorAll(".category-link");
// const booksContainer = document.querySelector(".books");
// const seeMoreButtons = document.querySelectorAll(".js-seemore-btn");

categoriesList.addEventListener('click', function (event) {
  if (event.target.classList.contains('allcategories-list__btn-js')) {
    event.preventDefault();
    container.innerHTML = '';
    loader.classList.remove('hide');
    const category = event.target.getAttribute('data-category');
    loadBooksByCategory(category);
  } else if (event.target.classList.contains('js-allcategories-btn')) {
    event.preventDefault();
    container.innerHTML = '';
    loader.classList.remove('hide');
    homeRender();
  }
});

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('js-seemore-btn')) {
    event.preventDefault();
    container.innerHTML = '';
    loader.classList.remove('hide');
    const category = event.target.getAttribute('data-category');
    loadBooksByCategory(category);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});

function loadBooksByCategory(category) {
  const words = category.split(" ");
  const lastWord = words.pop(); 
  const firstWords = words.join(" ");
const categoryTitle = `<h1 class="hero-title animate-bottom">${firstWords} <span class="hero-title-accent">${lastWord}</span>
</h1>`;

  getSeparateCategories(category)
    .then(response => {
      if (response.length > 0) {
        const booksMarkup = `<ul class="home-category-cards category-books home-container.container animate-bottom">
            ${response.map(book => createMarkup(book)).join('')}
          </ul>`;
          ;
        loader.classList.add('hide');
       return container.innerHTML = categoryTitle + booksMarkup;
      } else {
        container.innerHTML = `<p>No found books in category "${category}".</p>`;
      }
    })
    .catch(error => {
      console.error(`Error loading books in category "${category}":`, error);
    });
}

function createMarkup(book) {
  return `
    <div class="book-card">
    <div class="home-card-wrap">
    <img src="${book.book_image}" alt="${book.title} class="book-image" loading="lazy" width="335">
    <p class="home-card-overlay">quick view</p>
    </div>
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
    </div>
  `;
}