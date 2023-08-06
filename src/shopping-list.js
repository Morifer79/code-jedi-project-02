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
    emptyMessage.textContent = 'Список книг порожній';
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
