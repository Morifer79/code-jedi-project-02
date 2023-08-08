export const refss = {
	openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
	closeModalBtnMenu: document.querySelector('[data-modal-close-menu]'),
modalMenu: document.querySelector('[data-modal-menu]'),
singUpBtn: document.querySelector(".btn-user-help"),
 singUpBtnTab:document.querySelector(".btn-user-helper"),
menuGrupModal: document.querySelector(".menu-group-menu"),

	
};
let closModStDisplay = "";
let openModStDisplay = "";


window.addEventListener('resize', (e) => {
 if (e.target.innerWidth > 767) {
	
	 refss.singUpBtn.style.display = "flex"
	 refss.singUpBtnTab.style.display = "none"
	 

	refss.openModalBtnMenu.style.display = "none";
	refss.closeModalBtnMenu.style.display = "none";
}
else {
	
	refss.openModalBtnMenu.style.display=openModStDisplay
	 refss.closeModalBtnMenu.style.display = closModStDisplay
	refss.singUpBtnTab.style.display="flex"
	refss.singUpBtn.style.display = "none"
}
});



refss.openModalBtnMenu.addEventListener('click', toggleModalMenu);
refss.closeModalBtnMenu.addEventListener('click', toggleModalMenu);


	function toggleModalMenu() {
		refss.modalMenu.classList.toggle('is-hidden');
		if (!refss.modalMenu.classList.contains('is-hidden')) {
	refss.singUpBtnTab.style.display="flex"
	refss.openModalBtnMenu.style.display = "none";
	openModStDisplay="none"
	
	refss.closeModalBtnMenu.style.display = "block"
closModStDisplay="block"
	
	document.body.style.overflow = 'hidden';
} else {
	refss.openModalBtnMenu.style.display = "block";
	 openModStDisplay="block"
	refss.closeModalBtnMenu.style.display = "none";
			closModStDisplay = "none";
			refss.singUpBtn.style.display="none"
	// refss.singUpBtn.style.display = "none"
	document.body.style.overflow = '';
		}
		
		
	 
};

// if (!document.querySelector(".mobe-menu-close")) {
//   refss.openModalBtnMenu.classList.add('helper')
// }
// else{
// refss.openModalBtnMenu.classList.remove('helper')
// }
// if (refss.pageWidth > 700) {
//   console.log("ok");
//const pageWidth = document.documentElement.scrollWidth
// }
//  console.log(refss.pageWidth);