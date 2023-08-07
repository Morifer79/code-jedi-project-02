const refs = {
	openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
	closeModalBtnMenu: document.querySelector('[data-modal-close-menu]'),
modalMenu: document.querySelector('[data-modal-menu]'),
singUpBtn: document.querySelector(".btn-user"),
menuGrupModal: document.querySelector(".menu-group-menu"),
	
};

refs.openModalBtnMenu.addEventListener('click', toggleModalMenu);
refs.closeModalBtnMenu.addEventListener('click', toggleModalMenu);

	function toggleModalMenu() {


		refs.modalMenu.classList.toggle('is-hidden');
if (!refs.modalMenu.classList.contains('is-hidden')) {
	refs.openModalBtnMenu.style.display = "none";
	refs.closeModalBtnMenu.style.display = "block"
	refs.singUpBtn.style.display = "block"
	refs.menuGrupModal.style.display="block"
	document.body.style.overflow = 'hidden';
} else {
	refs.openModalBtnMenu.style.display = "block";
	refs.closeModalBtnMenu.style.display = "none";
	refs.singUpBtn.style.display = "none"
	refs.menuGrupModal.style.display="none"
	document.body.style.overflow = '';
	}
};