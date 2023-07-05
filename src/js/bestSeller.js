import {topBooks, selectedCategory} from './api.js';
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {openModal} from './pop-up';

const booksList = document.querySelector ('.js-gallery-books');
const galleryTitle = document.querySelector ('.gallery-heading');
const categoriesList = document.querySelector ('.categories-list');
let categoryValue;

function createBestSellers () {
  topBooks ().then (data => {
    if (data.length === 0) {
      Notify.failure ('Sorry, there are no best sellers books.');
      return;
    }

    galleryTitle.insertAdjacentHTML ('beforeend', createTitleMarkup ());
    booksList.insertAdjacentHTML ('beforeend', renderTopBooks (data.data));

    const galleryList = document.querySelectorAll ('.gallery-book-cards');

        galleryList.forEach (element => {
          element.addEventListener ('click', openModal);
        });
      })
      .catch (error => {
        console.log (error);
      });
  };
  
  createBestSellers ();

 

categoriesList.addEventListener ('click', handleCategoryClick);

function handleCategoryClick (event) {
  const selectedButton = event.target;
  const category = selectedButton.textContent;

  galleryTitle.innerHTML = '';
  booksList.innerHTML = '';

  if (category !== 'All categories') {
    addCardsByCategory (category);
  } else {
    allCateCategoriesCheck (category);
  }
}

function allCateCategoriesCheck (category) {
  if (category === 'All categories') {
    createBestSellers ();
  }
}

function createTitleMarkup () {
  return 'Best Sellers <span class="gallery-heading-span">Books</span>';
}

function changeTitleMarkup (title) {
  return `${title} <span class="gallery-heading-span">Books</span>`;
}

function renderTopBooks (data) {
  const createCards = data.map (ven => {
    let iterBook = ven.books[0];
    return createSelectCategoryBook (iterBook);
  });
  return createCards.join ('');
}

function onBtnOpen (evt) {
  if (evt.target.localName === 'div') {
    const bookId = evt.currentTarget.id;
    console.log (bookId);
  }
  return;
}

const eventLister = document.querySelector ('.gallery-books');

eventLister.addEventListener ('click', onMoreBtnClick);

function onMoreBtnClick (e) {
  if (e.target.localName === 'button') {
    categoryValue = e.target.getAttribute ('id');

    addCardsByCategory (categoryValue);
  }
}

function addCardsByCategory (name) {
  selectedCategory (name)
    .then (booksArr => {
      if (!booksArr || !booksArr.data || booksArr.data.length === 0) {
        booksList.innerHTML = '';
        galleryTitle.innerHTML = changeTitleMarkup ('');
        return;
      }

      const firstBook = booksArr.data[0];
      const titleCategory = firstBook && firstBook.list_name
        ? firstBook.list_name
        : '';
      console.log ();
      booksList.innerHTML = createCategoriesBooks (booksArr);
      galleryTitle.innerHTML = changeTitleMarkup (titleCategory);
      const galleryList = document.querySelectorAll ('.gallery-book-cards');
      galleryList.forEach (element => {
        element.addEventListener ('click', openModal);
      });

    })
    .catch (error => {
      console.log (error);
    });
}
function createCategoriesBooks (arr) {
  const map = arr.data.map (ven => createSelectCategoryBook (ven));
  return map.join ('');
}

function createSelectCategoryBook (arr) {
  if (!arr.book_image) {
    const bookImage = '../img/bestsellers/cover.jpg';
    return `<li id="${arr._id}" class = "gallery-book-cards">
<div class = "card-container">
 <img class="gallery-books-img" src="${bookImage}" alt="${arr.title}" loading="lazy">
 <div class="actions-card">
            <p class="overlay">quick view</p>
          </div> 
     </div>
 <h2 class="gallery-books-title">${arr.title}</h2>
 <p class="gallery-books-author">${arr.author}</p>
 </li>`;
  }
  return `<li id="${arr._id}" class = "gallery-book-cards " > <p class = "gallery-category-heading">${arr.list_name}</p>
<div class = "card-container">
<img class="gallery-books-img" src="${arr.book_image}" alt="${arr.title}" loading="lazy" width="435" height="485">
<div class="actions-card">
            <p class="overlay">quick view</p>
          </div> 
</div><h2 class="gallery-books-title">${arr.title}</h2><p class="gallery-books-author">${arr.author}</p>
<button type="button" id="${arr.list_name}" class="see-more">see more</button></li>`;
}

const btnUp = {
  el: document.querySelector ('.btn-up'),
  show () {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove ('btn-up_hide');
  },
  hide () {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add ('btn-up_hide');
  },
  addEventListener () {
    // при прокрутке содержимого страницы
    window.addEventListener ('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show () : this.hide ();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector ('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo ({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener ();
