import axios from 'axios';

const categoriesList = document.querySelector('.allcategories-list-js');

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

export default async function getBookAPI(type, value = '') {
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

function addListenersToAllBtns() {
  categoriesList.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      const activeCategory = document.querySelector(
        '.allcategories-list__btn-js.is-active'
      );

      activeCategory.classList.remove('is-active');
      e.target.classList.add('is-active');
    }
  });
}

renderCategoriesList();
