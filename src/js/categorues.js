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
 return categoriesList.insertAdjacentHTML("beforeend", categoryMarkup);
}




// categoriesList.addEventListener('click', handleCategoryClick);

  // if (category === 'All categories') {
  //   topBooks()
  //     .then(data => {
  //       if (data.length === 0) {
  //         Notify.failure('Sorry, there are no best sellers books.');
  //         return;
  //       }

  // console.log(category);

    // const selectedButton = event.target;
    // const category = selectedButton.classList[0].split('-')[1];

    // let activeButton = document.getElementsByClassName('active')[0]

    // activeButton.classList.remove('active')

    // selectedButton.classList.add('active');

    // const books = document.getElementsByClassName('book');
    // for (let i = 0; i < books.length; i++) {
    //   const book = books[i];
    //   if (category === 'all' || book.classList.contains(category)) {
    //     book.style.display = 'block';
    //   } else {
    //     book.style.display = 'none';
    //   }
    // }
  