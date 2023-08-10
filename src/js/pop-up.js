import renderModal from '../templates/pop-up.hbs';
import { getBookInfo } from './api.js';
import { container } from './home.js';
export class Spiner {
  bookSpinerEl = document.querySelector('.spiner-js');

  show() {
    this.bookSpinerEl.classList.remove('is-hidden');
  }

  hide() {
    this.bookSpinerEl.classList.add('is-hidden');
  }

  getEl() {
    return this.bookSpinerEl;
  }
}

const globalRefs = {
  backdrop: document.querySelector('.backdrop-js'),
  modal: document.querySelector('.modal-js'),
};

const BOOKS_DATA_KEY = 'books-data';
const USER_DATA_KEY = 'userData';
const bookArray = [];
const currentStorage = JSON.parse(sessionStorage.getItem(BOOKS_DATA_KEY));
const spiner = new Spiner();

export let imgSrcs = {
  amazonSrcX1: require('../images/modal/image-1@1x.png'),
  amazonSrcX2: require('../images/modal/image-1@2x.png'),
  appleBooksSrcX1: require('../images/modal/image-2@1x.png'),
  appleBooksSrcX2: require('../images/modal/image-2@2x.png'),
  barnesAndNobleSrcX1: require('../images/modal/image-3@1x.png'),
  barnesAndNobleSrcX2: require('../images/modal/image-3@2x.png'),
};

if (currentStorage) {
  bookArray.push(...currentStorage);
} else {
  sessionStorage.setItem(BOOKS_DATA_KEY, JSON.stringify([]));
}

if (!window.location.href.includes('cart.html')) {
  container.addEventListener('click', handleBookClick);
}

function handleBookClick(event) {
  if (
    event.target.closest('.home-card') ||
    event.target.closest('.book-card')
  ) {
    event.preventDefault();
    const liEl =
      event.target.closest('.home-card') || event.target.closest('.book-card');
    const id = liEl.id;
    handleModalWindow(id);
  }
}
export async function handleModalWindow(bookId) {
  spiner.show();
  try {
    const bookData = await getBookInfo(bookId);
    const isUserLogged = JSON.parse(sessionStorage.getItem(USER_DATA_KEY));

    let amazonUrl = bookData.buy_links.find(book => book.name === 'Amazon').url;
    let appleBooksUrl = bookData.buy_links.find(
      book => book.name === 'Apple Books'
    ).url;
    let barnesAndNobleUrl = bookData.buy_links.find(
      book => book.name === 'Barnes and Noble'
    ).url;

    globalRefs.modal.classList.remove('is-hidden');
    globalRefs.backdrop.classList.remove('is-hidden');
    document.body.classList.add('modal-open');

    globalRefs.modal.innerHTML = renderModal({
      ...bookData,
      amazonUrl,
      appleBooksUrl,
      barnesAndNobleUrl,
      ...imgSrcs,
    });

    spiner.hide();

    const refs = {
      addBtn: document.querySelector('.modal__add-btn-js'),
      removeBlock: document.querySelector('.modal__remove-block-js'),
      removeBtn: document.querySelector('.modal__remove-btn-js'),
      closeModalBtn: document.querySelector('.modal__close-btn-js'),
    };

    refs.removeBlock.classList.add('is-hidden');
    refs.addBtn.classList.add('is-hidden');
    if (isUserLogged) {
      refs.addBtn.classList.remove('is-hidden');
    }

    const isBookInStorage = bookArray.find(book => book._id === bookData._id);
    const bookIndex = bookArray.indexOf(isBookInStorage);

    if (isBookInStorage && isUserLogged) {
      refs.addBtn.classList.add('is-hidden');
      refs.removeBlock.classList.remove('is-hidden');
    }

    window.addEventListener('keydown', handleEscKeyPress);
    window.addEventListener('click', handleBackDropClick);
    refs.addBtn.addEventListener('click', handleAddBtnClick);
    refs.removeBtn.addEventListener('click', handleRemoveBtnClick);
    refs.closeModalBtn.addEventListener('click', handleCloseModalBtnClick);

    function handleCloseModalBtnClick() {
      closeModal();
      removeListeners();
      clearInterface();
      document.body.classList.remove('modal-open');
    }

    function handleAddBtnClick() {
      bookArray.push(bookData);
      sessionStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(bookArray));
      refs.addBtn.classList.add('is-hidden');
      refs.removeBlock.classList.remove('is-hidden');
    }

    function handleRemoveBtnClick() {
      bookArray.splice(bookIndex, 1);
      sessionStorage.setItem(BOOKS_DATA_KEY, JSON.stringify(bookArray));
      refs.addBtn.classList.remove('is-hidden');
      refs.removeBlock.classList.add('is-hidden');
    }

    function handleEscKeyPress(evt) {
      const isEsc = evt.code === 'Escape';
      if (isEsc) {
        closeModal();
        removeListeners();
        clearInterface();
        document.body.classList.remove('modal-open');
      }
    }

    function handleBackDropClick(evt) {
      if (evt.target === globalRefs.backdrop) {
        closeModal();
        removeListeners();
        clearInterface();
        document.body.classList.remove('modal-open');
      }
    }

    function closeModal() {
      globalRefs.modal.classList.add('is-hidden');
      globalRefs.backdrop.classList.add('is-hidden');
    }

    function removeListeners() {
      window.removeEventListener('keydown', handleEscKeyPress);
      window.removeEventListener('click', handleBackDropClick);
    }

    function clearInterface() {
      globalRefs.modal.innerHTML = '';
    }
  } catch (error) {
    console.log(error);
  }
}
