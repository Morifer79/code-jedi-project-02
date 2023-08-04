document.addEventListener('DOMContentLoaded', function () {
    const categoriesList = document.querySelectorAll('.categories li');
  
    categoriesList.forEach((category) => {
      category.addEventListener('click', () => {
        const selectedCategory = category.dataset.category;
        renderContent(selectedCategory);
        // console.log(selectedCategory);
      });
    });
  });
  
  async function renderContent(category) {
    const contentContainer = document.querySelector('.content-container');
    // console.log(selectedCategory);
    try {
      const response = await fetchApiFunction(category);
      const data = await response.json();
// console.log(data);
      let booksMarkup = '';
      if (data.length === 0) {
        booksMarkup = '<p>No books found in this category.</p>';
      } else {
        data.forEach(book => {
          booksMarkup += createMarkup(book);
        });
      }
    
  }
  
  function createMarkup(book) {
    return 
    
  }
}
