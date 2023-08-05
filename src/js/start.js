import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// конфігурація проєкту Firebase
const firebaseConfig = {
  apiKey: 'YAIzaSyAebBdjN9n82637h_F6UeUrgHEOJRMfnmg',
  authDomain: 'book-project.firebaseapp.com',
  projectId: 'book-project-dec87',
  storageBucket: 'book-project-dec87.appspot.com',
  messagingSenderId: '888871207725',
  appId: '1:888871207725:web:e9b3c5c35febc94926c9a4',
};

// Ініціалізація Firebase

firebase.initializeApp(firebaseConfig);

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
})();

const authForm = document.getElementById('authForm');
const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const signUpBtn = document.getElementById('signupBtn');

signUpLink.addEventListener('click', toggleAuthMode);
signInLink.addEventListener('click', toggleAuthMode);

function toggleAuthMode(event) {
  event.preventDefault();
  signUpBtn.textContent = event.target.classList.contains('sign-up-link')
    ? 'SIGN UP'
    : 'SIGN IN';
}

authForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const isSignUp = signUpBtn.textContent === 'SIGN UP';

  if (isSignUp) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Registration successful:', user);
        toggleModal();
      })
      .catch(error => {
        console.error('Registration error: Please try again', error);
      });
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Authorization successful:', user);
        toggleModal();
      })
      .catch(error => {
        console.error('Authorization error: Please try again', error);
      });
  }
});

// const email = "user@example.com";
// const password = "password123";
