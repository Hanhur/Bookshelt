import { topBooks, selectedCategory } from './api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { modalOpen } from './popUp';

const booksList = document.querySelector('.js-gallery-books');
const galleryTitle = document.querySelector('.gallery-heading');
const categoriesList = document.querySelector('.categories-list');
let categoryValue;



function createBestSellers() {
  topBooks()
      .then(data => {
        if (data.length === 0) {
          Notify.failure('Sorry, there are no best sellers books.');
          return;
        }

        galleryTitle.insertAdjacentHTML('beforeend', createTitleMarkup());
        booksList.insertAdjacentHTML('beforeend', createBookListMarkup(data));

        const galleryList = document.querySelectorAll('.gallery-book-cards');
        galleryList.forEach(element => {
          element.addEventListener('click', onBtnOpen);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
createBestSellers()


categoriesList.addEventListener('click', handleCategoryClick);

function handleCategoryClick(event) {
  const selectedButton = event.target;
  const category = selectedButton.textContent;

  galleryTitle.innerHTML = "";
  booksList.innerHTML = "";

if (category !== 'All categories') {
    addCardsByCategory(category);
  } else {
    allCateCategoriesCheck(category);
  }
  }

function allCateCategoriesCheck(category) {
  if (category === 'All categories') {
    createBestSellers()
  }
}

function createTitleMarkup() {
  return 'Best Sellers <span class="gallery-heading-span">Books</span>';
}

function changeTitleMarkup(title) {
  return `${title} <span class="gallery-heading-span">Books</span>`;
}

function createBookListMarkup(data) {
  const totalObject = data.data.slice(0, 4);

  const createCards = totalObject.map(ven => {
 if (!ven.books[0]) {
      return ''; 
    }

    if (!ven.books[0].book_image) {
      const bookImage = '../img/bestsellers/cover.jpg';
      return `<li id="${ven.books[0]._id}" class = "gallery-book-cards">
       <div class = "card-container">
        <img class="gallery-books-img" src="${bookImage}" alt="${ven.books[0].title}" loading="lazy">
        <div class="actions-card">
            <p class="overlay">quick view</p>
          </div>    
        </div>
        <h2 class="gallery-books-title">${ven.books[0].title}</h2>
        <p class="gallery-books-author">${ven.books[0].author}</p>
        </li>`;
    }
    return `<li id="${ven.books[0]._id}" class = "gallery-book-cards"> <p class = "gallery-category-heading">${ven.books[0].list_name}</p>
  <div class = "card-container">
  <img class="gallery-books-img" src="${ven.books[0].book_image}" alt="${ven.books[0].title}" loading="lazy" width="435" height="485">
  <div class="actions-card">
            <p class="overlay">quick view</p>
          </div> 
  </div>
  <h2 class="gallery-books-title">${ven.books[0].title}</h2>
  <p class="gallery-books-author">${ven.books[0].author}</p>
  <button type="button" id="${ven.books[0].list_name}" class="see-more">see more</button></li>`;
  });
  return createCards.join('');
}

function onBtnOpen(evt) {
  const bookId = evt.currentTarget.id;
  console.log(bookId);
}

const eventLister = document.querySelector('.gallery-books');

eventLister.addEventListener('click', onMoreBtnClick);

function onMoreBtnClick(e) {
  console.log();
  if (e.target.localName === 'button') {
    categoryValue = e.target.getAttribute('id');

    addCardsByCategory(categoryValue);
  }
}

function addCardsByCategory(name) {
  selectedCategory(name)
    .then(booksArr => {
      if (!booksArr || !booksArr.data || booksArr.data.length === 0) {
        booksList.innerHTML = '';
        galleryTitle.innerHTML = changeTitleMarkup('');
        return;
      }

      const firstBook = booksArr.data[0];
      const titleCategory = firstBook && firstBook.list_name ? firstBook.list_name : '';

      booksList.innerHTML = createSelectCategoryBooks(booksArr);
      galleryTitle.innerHTML = changeTitleMarkup(titleCategory);
    })
    .catch(error => {
      console.log(error);
    });
}


function createSelectCategoryBooks(arr) {
  const totalObject = arr.data.slice(0, 7);
  const crat = totalObject.map(tot => {
    if (!tot.book_image) {
      const bookImage = '../img/bestsellers/cover.jpg';
      return `<li id="${tot._id}" class = "gallery-book-cards">
  <div class = "card-container">
   <img class="gallery-books-img" src="${bookImage}" alt="${tot.title}" loading="lazy">
       </div>
   <h2 class="gallery-books-title">${tot.title}</h2>
   <p class="gallery-books-author">${tot.author}</p>
   </li>`;
    }
    return `<li id="${tot._id}" class = "gallery-book-cards"> <p class = "gallery-category-heading">${tot.list_name}</p>
<div class = "card-container">
<img class="gallery-books-img" src="${tot.book_image}" alt="${tot.title}" loading="lazy" width="435" height="485">
</div><h2 class="gallery-books-title">${tot.title}</h2><p class="gallery-books-author">${tot.author}</p>
<button type="button" id="${tot.list_name}" class="see-more">see more</button></li>`;
  });
  return crat.join('');
}

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();