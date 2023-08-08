const e=document.querySelectorAll(".js-img-switcher");function t(e){let t=`./css/theme-${e}.css`;document.querySelector('[title="theme"]').setAttribute("href",t)}e.forEach(e=>{e.addEventListener("click",function(){t(this.dataset.theme),localStorage.setItem("theme",this.dataset.theme)})});let c=localStorage.getItem("theme");null===c?t("dark"):t(c);
//# sourceMappingURL=cart.1260d360.js.map
