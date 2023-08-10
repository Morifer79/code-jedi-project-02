// Перевірка підтримки localStorage
function isLocalStorageSupported() {
    try {
        const testKey = 'test';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

// Отримуємо дані з localStorage
function getBooksFromStorage() {
    if (isLocalStorageSupported()) {
        const books = localStorage.getItem('books');
        return books ? JSON.parse(books) : [];
    }
    return [];
}

// Зберігаємо дані у localStorage
function saveBooksToStorage(books) {
    if (isLocalStorageSupported()) {
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Функція для додавання книги до списку
function addBookToList(title) {
    const bookList = document.getElementById('bookList');
    const listItem = document.createElement('li');
    listItem.textContent = title;
    bookList.appendChild(listItem);
}

// Функція для відображення повідомлення, якщо список порожній
function showEmptyMessage() {
    const bookList = document.getElementById('bookList');
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'This page is empty, add some books and proceed to order.';
    bookList.appendChild(emptyMessage);
}

// Основна функція, яка викликається при завантаженні сторінки
function main() {
    const books = getBooksFromStorage();

    if (books.length > 0) {
        books.forEach((book) => addBookToList(book));
    } else {
        showEmptyMessage();
    }
}

main();



const BOOKS_DATA_KEY = 'books-data';
const bookArray = JSON.parse(sessionStorage.getItem(BOOKS_DATA_KEY)) || [];

const imgSrcs = {
  amazonSrcX1: require('../images/modal/image-1@1x.png'),
  amazonSrcX2: require('../images/modal/image-1@2x.png'),
  appleBooksSrcX1: require('../images/modal/image-2@1x.png'),
  appleBooksSrcX2: require('../images/modal/image-2@2x.png'),
  barnesAndNobleSrcX1: require('../images/modal/image-3@1x.png'),
  barnesAndNobleSrcX2: require('../images/modal/image-3@2x.png'),
};

const shoppingListContainer = document.querySelector('.shopping-list-container');

function renderShoppingList() {
  
  if (bookArray.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Ваш список покупок порожній.';
    shoppingListContainer.appendChild(emptyMessage);
    return;
  }

  bookArray.forEach(book => {
    const card = document.createElement('div');
    card.className = 'shopping-list-card';

    card.innerHTML = `
      <img src="${imgSrcs[book.coverImageUrl]}" alt="${book.title}" class="shopping-list-card__image">
      <h2 class="shopping-list-card__title">${book.title}</h2>
      <p class="shopping-list-card__category">${book.category}</p>
      <p class="shopping-list-card__description">${book.description}</p>
      <p class="shopping-list-card__author">Автор: ${book.author}</p>
      <div class="shopping-list-card__links">
        <ul>
          ${book.buyLinks.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
        </ul>
      </div>
      <button class="shopping-list-card__remove-btn">Видалити зі списку</button>
    `;

    const removeBtn = card.querySelector('.shopping-list-card__remove-btn');
    removeBtn.addEventListener('click', () => {
      const bookIndex = bookArray.findIndex(item => item._id === book._id);
      if (bookIndex !== -1) {
        bookArray.splice(bookIndex, 1);
        sessionStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(bookArray));
        renderShoppingList(); // Поновлюємо список після видалення
      }
    });

    shoppingListContainer.appendChild(card);
  });
}

// Викликаємо функцію для відмальовки списку при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  renderShoppingList();
});
