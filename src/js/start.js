import Notiflix from 'notiflix';
import { handleClick } from './header.js';
import { refss } from './menu.js';
const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),

  test: document.querySelector('[data-modal-open-mob]'),

  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  authForm: document.getElementById('authForm'),
  signUpLink: document.querySelector('.sign-up-link'),
  signInLink: document.querySelector('.sign-in-link'),
  signUpBtn: document.querySelector('.signup-btn'),
  cartIcon: document.querySelector('.js-shopping-cart-btn'),
};

refs.test.addEventListener('click', toggleModal);

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.signUpLink.addEventListener('click', toggleAuthMode);
refs.signInLink.addEventListener('click', toggleAuthMode);
refs.authForm.addEventListener('submit', handleAuthFormSubmit);

function toggleModal() {
  refss.menuGrupModal.style.display = 'block';
  refs.modal.classList.toggle('is-hidden');
  if (!refs.modal.classList.contains('is-hidden')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function toggleAuthMode(event) {
  event.preventDefault();
  refs.signUpBtn.textContent = event.target.classList.contains('sign-up-link')
    ? 'SIGN UP'
    : 'SIGN IN';
}

export let userName;

function handleAuthFormSubmit(e) {
  e.preventDefault();
  const isSignUp = refs.signUpBtn.textContent === 'SIGN UP';
  userName = e.currentTarget.elements.userName.value;
  const userEmail = e.currentTarget.elements.userEmail.value;
  const userPassword = e.currentTarget.elements.userPassword.value;

  if (isSignUp) {
    const userData = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    const serializedUserData = JSON.stringify(userData);
    sessionStorage.setItem('userData', serializedUserData);
    Notiflix.Notify.success('Registration successful!');
    setTimeout(() => {
      toggleModal();
      handleClick();
      changeCartIcon();
    }, 500);
    e.target.reset();
  } else {
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      if (
        parsedUserData.name === userName &&
        parsedUserData.email === userEmail &&
        parsedUserData.password === userPassword
      ) {
        Notiflix.Notify.success('Authorization successful!');
        setTimeout(() => {
          toggleModal();
          handleClick();
          changeCartIcon();
        }, 500);
        e.target.reset();
      } else {
        Notiflix.Notify.error('User is not registered! Please register!');
        refs.signUpBtn.textContent = 'SIGN UP';
      }
    }
  }
}

function changeCartIcon() {
  refs.cartIcon.style.display = 'flex';
}
