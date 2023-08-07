const refs = {
	openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
	closeModalBtnMenu: document.querySelector('[data-modal-close-menu]'),
modalMenu: document.querySelector('[data-modal-menu]'),
	
};

refs.openModalBtnMenu.addEventListener('click', toggleModalMenu);
refs.closeModalBtnMenu.addEventListener('click', toggleModalMenu);

	function toggleModalMenu() {


		refs.modalMenu.classList.toggle('is-hidden');
if (!refs.modalMenu.classList.contains('is-hidden')) {
	refs.openModalBtnMenu.style.display = "none";
 refs.closeModalBtnMenu.style.display="block"
	document.body.style.overflow = 'hidden';
} else {
	refs.openModalBtnMenu.style.display = "block";
	refs.closeModalBtnMenu.style.display="none"
	document.body.style.overflow = '';
	}
};