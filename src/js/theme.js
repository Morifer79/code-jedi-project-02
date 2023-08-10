const Theme = {
	DARK: 'dark-theme',
	LIGHT: 'light-theme',
}

const body = document.body;
const btn = document.querySelector('.js-theme-switch');
const logoLight = document.querySelector('.js-logo-light');
const logoDark = document.querySelector('.js-logo-dark');

currentTheme();

btn.addEventListener('change', (e) => {
	body.classList.toggle(Theme.DARK);
	if(!e.currentTarget.checked){
		localStorage.setItem('theme', Theme.LIGHT);
		logoDark.style.display = 'none';
		logoLight.style.display = 'inline-block';
	} else {
		localStorage.setItem('theme', Theme.DARK);
		logoLight.style.display = 'none';
		logoDark.style.display = 'inline-block';
	}
})

function currentTheme() {
	const savedTheme = localStorage.getItem('theme');
	if(savedTheme === Theme.DARK){
		body.classList.add(Theme.DARK);
		btn.checked = true;
		logoLight.style.display = 'none';
		logoDark.style.display = 'inline-block';
	} else {
		body.classList.remove(Theme.DARK);
		btn.checked = false;
	}
}