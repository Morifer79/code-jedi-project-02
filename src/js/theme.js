const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
}

const body = document.body;
const btn = document.querySelector('.js-theme-switch');
btn.addEventListener('change', changeTheme);

currentTheme();

function changeTheme(e){
	if(!e.currentTarget.checked){
		body.classList.add(Theme.LIGHT);
		body.classList.remove(Theme.DARK);
		localStorage.setItem('theme', Theme.LIGHT)
	} else {
		body.classList.add(Theme.DARK);
		body.classList.remove(Theme.LIGHT);
		localStorage.setItem('theme', Theme.DARK)
	}
}

function currentTheme(){
	const savedTheme = localStorage.getItem('theme');
	if(savedTheme){
		body.classList.add(savedTheme);
	} else {
		body.classList.add(Theme.LIGHT);
	}
	if(savedTheme === Theme.DARK){
		btn.checked = true;
	}
}