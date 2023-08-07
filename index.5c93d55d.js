var e,t,o,a;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},null==(a=e.parcelRequired7c6)&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a),a.register("6N62V",function(e,t){var o=a("6JpON"),l=a("b7ONl");let r=document.querySelector(".js-home-markup"),i=`<h1 class="hero-title">
  Best Sellers <span class="hero-title-accent">Books</span>
</h1>`;(0,l.getTopBooks)().then(e=>r.innerHTML=i+function(e){let t=e.map(e=>`
    <div class="home-card-container">
      <h3 class="home-category-title">${e.list_name}</h3>
      <ul class="home-category-cards">
      ${e.books.map(e=>`<li class="home-card" id="${e._id}">
        <img src="${e.book_image}" alt="${e.title} loading="lazy" width="335">
        <h2 class="home-card-title">${e.title}</h2>
        <p class="home-card-author">${e.author}</p>
      </li>`).join("")}
      </ul>
      <button type="button" class="home-category-btn js-seemore-btn" name="${e.list_name}">see more</button>
    </div>`).join("");return t}(e)).catch(()=>(o&&o.__esModule?o.default:o).Notify.failure("Failed to load books. Please try again later."))}),a("6N62V");
//# sourceMappingURL=index.5c93d55d.js.map
