import axios from "axios";
const container = document.querySelector('.js-home-markup');

const HOME_REQ = 'https://books-backend.p.goit.global/books/top-books';

axios
  .get(`${HOME_REQ}`)
  .then(({ data }) => {
    console.log(data);
    return container.insertAdjacentHTML('beforeend', createMarkupCards(data));
  })
  .catch(err => console.log(err));

function createMarkupCards(data) {
  const markup = data
    .map(
      data => `
    <div>
      <h3>${data.list_name}</h3>
      <ul class="home-category-cards">
      ${data.books
        .map(
          book => `<li class="book-card" id="${book._id}">
        <img src="${book.book_image}" alt="${book.title} class="home-card-img" loading="lazy" width="335">
        <h2>${book.title}</h2>
        <p>${book.author}</p>
      </li>`
        )
        .join('')}
      </ul>
      <button type="button">see more</button>
    </div>`
    )
    .join('');
  return markup;
}
