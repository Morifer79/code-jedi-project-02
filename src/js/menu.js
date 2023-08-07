(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-menu]'),
    closeModalBtn: document.querySelector('[data-modal-close-menu]'),
    modal: document.querySelector('[data-modal-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      console.log(refs.modal.classList.contains('is-hidden'));
    // refs.modal.classList.toggle('is-hidden');
    if (refs.modal.classList.contains('is-hidden')) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'is-hidden';
    }
  }
})();