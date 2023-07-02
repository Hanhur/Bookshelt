import {booksCategory} from './api'

const categoriesList = document.querySelector('.categories-list');

booksCategory()
  .then(categories => {
      categories.data.forEach(category => {
      const categoryMarkup = createCategoryMarkup(category);
      appendSlideMarkup(categoryMarkup);
    });
  })
  .catch(error => {
    console.log(error);
  });

function createCategoryMarkup(category) {
  return `<li class="categories-item">
    <a href="#" class="categories-link">${category.list_name}</a>
  </li>`;
}

function appendSlideMarkup(categoryMarkup) {
  categoriesList.insertAdjacentHTML("beforeend", categoryMarkup);
}


