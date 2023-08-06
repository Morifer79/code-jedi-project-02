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

const authForm = document.getElementById('authForm');
const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const signUpBtn = document.querySelector('.signup-btn');

signUpLink.addEventListener('click', toggleAuthMode);
signInLink.addEventListener('click', toggleAuthMode);
authForm.addEventListener('submit', handleAuthFormSubmit);

function toggleAuthMode(event) {
  event.preventDefault();
  signUpBtn.textContent = event.target.classList.contains('sign-up-link')
    ? 'SIGN UP'
    : 'SIGN IN';
}

let userName;

function handleAuthFormSubmit(e) {
  e.preventDefault();
  const isSignUp = signUpBtn.textContent === 'SIGN UP';
  userName = e.currentTarget.elements.userName.value;
  const userEmail = e.currentTarget.elements.userEmail.value;
  const userPassword = e.currentTarget.elements.userPassword.value;

  if (isSignUp) {
    // Реєстрація нового користувача
    const userData = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    const serializedUserData = JSON.stringify(userData);
    localStorage.setItem('userData', serializedUserData);
    console.log('Registration successful!');
    // Notlify.Notlifix.success('Registration successful!');
    setTimeout(toggleModal, 2000);
    e.target.reset();
  } else {
    // Авторизація користувача
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      if (
        parsedUserData.name === userName &&
        parsedUserData.email === userEmail &&
        parsedUserData.password === userPassword
      ) {
        console.log('Authorization successful!');
        // Notlify.Notlifix.success('Authorization successful!');
        setTimeout(toggleModal, 2000);
        e.target.reset();
      } else {
        console.log('User not registered. Please register!');
        // Notlify.Notlifix.error('User not registered. Please register!');
        signUpBtn.textContent = 'SIGN UP';
      }
    }
  }
}