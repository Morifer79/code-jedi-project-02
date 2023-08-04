import axios from 'axios';

const categoriesAll = "https://books-backend.p.goit.global/books/category-list";

document.addEventListener('DOMContentLoaded', function () {
  const libraryLinks = document.querySelectorAll('.library-link');
  const existingCategoryLinks = document.querySelectorAll('.category-link');

  libraryLinks.forEach((link) => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      const selectedCategory = link.dataset.category;
      try {
        const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
        renderContent(selectedCategory, response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        renderError();
      }
    });
  });

  existingCategoryLinks.forEach((link) => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      const selectedCategory = link.dataset.category;
      try {
        const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
        renderContent(selectedCategory, response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        renderError();
      }
    });
  });
});

function renderContent(category, books) {
  const contentContainer = document.querySelector('.content-container');

  let booksMarkup = '';
  if (books.length === 0) {
    booksMarkup = '<p>No books found in this category.</p>';
  } else {
    books.forEach(book => {
      booksMarkup += createMarkup(book);
    });
  }

  const categoryMarkup = `<h2>${category}</h2>`;
  contentContainer.innerHTML = categoryMarkup + booksMarkup;
}

function createMarkup(book) {
  return `
    <div class="book">
      <img src="${book.book_image}" alt="${book.title}" />
      <p>${book.title} by ${book.author}</p>
    </div>
  `;
}

function renderError() {
  const contentContainer = document.querySelector('.content-container');
  contentContainer.innerHTML = '<p>An error occurred while fetching books.</p>';
}