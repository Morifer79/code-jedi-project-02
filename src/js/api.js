import axios from 'axios';

const categoriesAll = 'https://books-backend.p.goit.global/books/category-list';
const topBooks = 'https://books-backend.p.goit.global/books/top-books';
const separateCategories =
  'https://books-backend.p.goit.global/books/category?category=';
const bookInfo = 'https://books-backend.p.goit.global/books/';

export function getAllCategories() {
  return axios.get(categoriesAll).then(response => {
    return response.data;
  });
}

export function getTopBooks() {
  return axios.get(topBooks).then(response => {
    return response.data;
  });
}

export function getSeparateCategories(category) {
  return axios.get(`${separateCategories}${category}`).then(response => {
    return response.data;
  });
}

export function getBookInfo(id) {
  return axios.get(`${bookInfo}${id}`).then(response => {
    return response.data;
  });
}

