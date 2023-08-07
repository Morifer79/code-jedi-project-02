var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in t){var a=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,a.call(l.exports,l,l.exports),l.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=a),a.register("awoeA",function(e,o){var t=a("7Y9D8"),l=a("7rYDH");let r=document.querySelector(".js-home-markup"),i=`<h1 class="hero-title">
  Best Sellers <span class="hero-title-accent">Books</span>
</h1>`;(0,l.getTopBooks)().then(e=>r.innerHTML=i+function(e){let o=e.map(e=>`
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
    </div>`).join("");return o}(e)).catch(()=>(t&&t.__esModule?t.default:t).Notify.failure("Failed to load books. Please try again later."))}),a("awoeA");
//# sourceMappingURL=index.d2ffa67f.js.map
