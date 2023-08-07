import axios from 'axios';

export const categoriesList = document.querySelector('.category-link');

const URL = {
  all: 'https://books-backend.p.goit.global/books/category-list',
  top: 'https://books-backend.p.goit.global/books/top-books',
  category: 'https://books-backend.p.goit.global/books/category?category=',
  bookId: 'https://books-backend.p.goit.global/books/',
};

function categoriesListMarkup(data) {
  return data
    .map(({ list_name }) => {
      return `<li class="allcategories-list__item">
      <button class="allcategories-list__btn allcategories-list__btn-js" type="button" data-category="${list_name}">${list_name}</button>
    </li>`;
    })
    .join('');
}

export async function getBookAPI(type, value = '') {
  const response = await axios.get(`${URL[type]}${value}`);
  return response.data;
}

async function renderCategoriesList() {
  try {
    const data = await getBookAPI('all');

    const sortedData = [...data].sort((a, b) => {
      return a.list_name.localeCompare(b.list_name);
    });

    categoriesList.insertAdjacentHTML(
      'beforeend',
      categoriesListMarkup(sortedData)
    );

    addListenersToAllBtns();
  } catch (error) {
    console.log(error);
  }
}

renderCategoriesList();
