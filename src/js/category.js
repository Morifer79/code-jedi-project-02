import { getSeparateCategories } from './api'; 

const categoryLinks = document.querySelectorAll(".category-link");
const booksContainer = document.querySelector(".books");
const seeMoreButtons = document.querySelectorAll(".js-seemore-btn");


categoryLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const category = link.getAttribute("data-category");
    loadBooksByCategory(category);
  });
});

seeMoreButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
  const category = button.getAttribute("name");
  loadBooksByCategory(category);
  });
});

function loadBooksByCategory(category) {
  const categoryNameElement = document.querySelector(".category-title");
  const categoryName = ` ${category} `;
  categoryNameElement.textContent = categoryName;

  const words = categoryName.split(" ");
  const lastWord = words[words.length - 2]; 

  const lastWordElement = document.createElement("span");
  lastWordElement.textContent = lastWord;
  lastWordElement.style.color = "#4F2EE8"; 

  categoryNameElement.innerHTML = categoryName.replace(
    lastWord,
    lastWordElement.outerHTML
  );

  console.log(`Loading books in category "${category}"...`);

  getSeparateCategories(category)
    .then(response => {
      if (response.length > 0) {
        console.table(response); 
        const booksMarkup = response.map(book => createMarkup(book)).join("");
       return booksContainer.innerHTML = booksMarkup;
      } else {
        booksContainer.innerHTML = `<p>No found books in category "${category}".</p>`;
      }
    })
    .catch(error => {
      console.error(`Error loading books in category "${category}":`, error);
    });
}

function createMarkup(book) {
  return `
    <div class="book-card">
      <img src="${book.book_image}" alt="${book.title}" class="book-image">
      <h3 class="home-card-title">${book.title}</h3>
      <p class="book-author">Author: ${book.author}</p>
    </div>
  `;
}
