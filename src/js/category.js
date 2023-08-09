import { getSeparateCategories } from './api';
import { container } from './home.js';
import { categoriesList } from './allCategories-render';
// const categoryLinks = document.querySelectorAll(".category-link");
// const booksContainer = document.querySelector(".books");
// const seeMoreButtons = document.querySelectorAll(".js-seemore-btn");

categoriesList.addEventListener('click', function (event) {
  if (event.target.classList.contains('allcategories-list__btn-js')) {
    event.preventDefault();
    const category = event.target.getAttribute('data-category');
    loadBooksByCategory(category);
  }
});

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('js-seemore-btn')) {
    event.preventDefault();
    const category = event.target.getAttribute('data-category');
    loadBooksByCategory(category);
  }
});

function loadBooksByCategory(category) {
  const categoryNameElement = document.querySelector('.hero-title');
  const categoryName = ` ${category} `;
  categoryNameElement.textContent = categoryName;

  const words = categoryName.split(' ');
  const lastWord = words[words.length - 2];

  const lastWordElement = document.createElement('span');
  lastWordElement.textContent = lastWord;
  lastWordElement.style.color = '#4F2EE8';

  categoryNameElement.innerHTML = categoryName.replace(
    lastWord,
    lastWordElement.outerHTML
  );

  getSeparateCategories(category)
    .then(response => {
      if (response.length > 0) {
        const booksMarkup = `<ul class="home-category-cards category-books home-container.container">
            ${response.map(book => createMarkup(book)).join('')}
          </ul>`;
        return (container.innerHTML = booksMarkup);
        // animateBooks();
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

// document.addEventListener('DOMContentLoaded', function () {
//   const bookCards = document.querySelectorAll('.book-card');
//   bookCards.forEach((bookCard, index) => {
//     bookCard.style.transitionDelay = `${index * 0.1}s`;
//     bookCard.classList.add('animated');
//   });
// });

// function animateBooks() {
//   const bookCards = document.querySelectorAll('.book-card');
//   const containerWidth = container.offsetWidth;
//   const containerHeight = container.offsetHeight;

//   bookCards.forEach(bookCard => {
//     const randomX = Math.random() * (containerWidth - 200);
//     const randomY = Math.random() * (containerHeight - 200);

//     bookCard.style.transform = `translate(${randomX}px, ${randomY}px)`;
//     bookCard.classList.add('animated');
//   });
// }
