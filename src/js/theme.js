// const button = document.querySelector('.theme-switch');
// const theme = document.querySelector("#theme-link");

// function onChange(e){
// 	if(!e.currentTarget.checked){
// 		localStorage.setItem('theme', 'theme-light');
// 	} else {
// 		localStorage.setItem('theme', 'theme-dark')
// 	}
// }

// activeTheme();

// function activeTheme(){
// 	const savedTheme = localStorage.getItem('theme');
// 	if(savedTheme){
// 		theme.href = `./css/${savedTheme}.css`;
// 	} else {
// 		theme.href = "./css/theme-light.css";
// 	}
// 	if(savedTheme === 'theme-dark'){
// 		button.checked = true;
// 	}
// }