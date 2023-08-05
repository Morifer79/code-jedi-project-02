export default function categoriesListMarkup(data) {
  return data
    .map(({ list_name }) => {
      return `<li class="allcategories-list__item">
      <button class="allcategories-list__btn allcategories-list__btn-js" type="button" data-category="${list_name}">${list_name}</button>
    </li>`;
    })
    .join('');
}
