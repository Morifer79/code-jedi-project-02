// import {initializeApp} from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// конфігурація проєкту Firebase
// const firebaseConfig = {
//   apiKey: 'Your_API_Key',
//   authDomain: 'Your_Auth_Domain',
//   projectId: 'Your_Project_Id',
//   storageBucket: 'Your_Storage_Bucket',
//   messagingSenderId: 'Your_Messaging_Sender_Id',
//   appId: 'Your_App_Id',
// };


// async function initializeFirebase() {
//   await firebase.initializeApp(firebaseConfig);
// }

const authForm = document.getElementById('authForm');
const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const signUpBtn = document.getElementById('signupBtn');

signUpLink.addEventListener('click', toggleAuthMode);
signInLink.addEventListener('click', toggleAuthMode);
authForm.addEventListener('submit', handleAuthFormSubmit);

function toggleAuthMode(event) {
  event.preventDefault();
  signUpBtn.textContent = event.target.classList.contains('sign-up-link')
    ? 'SIGN UP'
    : 'SIGN IN';
}


async function handleAuthFormSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const isSignUp = signUpBtn.textContent === 'SIGN UP';

  try {
    // await initializeFirebase();

    if (isSignUp) {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Registration successful:', user);
      toggleModal();
    } else {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Authorization successful:', user);
      toggleModal();
    }
  } catch (error) {
    console.error('Authentication error: Please try again', error);
  }
}


document.addEventListener('DOMContentLoaded', () => {
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
});

// const email = "user@example.com";
// const password = "password123";