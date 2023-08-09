const themeSwitchers = document.querySelectorAll('.js-img-switcher');

themeSwitchers.forEach(switcher => {
	switcher.addEventListener('click', function () {
		let theme = this.dataset.theme;
		applyTheme(theme);
		localStorage.setItem('theme', theme);
	});
});

function applyTheme(themeName) {
	let themeUrl = `/css/theme-${themeName}.css`;
	document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
	themeSwitchers.forEach(button => {
		button.style.display = 'block';
	});
	document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
}

let activeTheme = localStorage.getItem('theme');

if (activeTheme === null || activeTheme === 'light') {
	applyTheme('light');
} else {
	applyTheme('dark');
}