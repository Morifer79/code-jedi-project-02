export const refss = {
	openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
	closeModalBtnMenu: document.querySelector('[data-modal-close-menu]'),
modalMenu: document.querySelector('[data-modal-menu]'),
singUpBtn: document.querySelector(".btn-user"),
menuGrupModal: document.querySelector(".menu-group-menu"),
	
};

refss.openModalBtnMenu.addEventListener('click', toggleModalMenu);
refss.closeModalBtnMenu.addEventListener('click', toggleModalMenu);

	function toggleModalMenu() {


		refss.modalMenu.classList.toggle('is-hidden');
if (!refss.modalMenu.classList.contains('is-hidden')) {
	refss.openModalBtnMenu.style.display = "none";
	refss.closeModalBtnMenu.style.display = "block"
	refss.singUpBtn.style.display = "block"
	document.body.style.overflow = 'hidden';
} else {
	refss.openModalBtnMenu.style.display = "block";
	refss.closeModalBtnMenu.style.display = "none";
	refss.singUpBtn.style.display = "none"
	document.body.style.overflow = '';
		}
		
		
};