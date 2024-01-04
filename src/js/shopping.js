import bookDum from '../img/shopping/book_dum.jpg';
import amazonFoto from '../img/shopping/amazon.jpg';
import applebookFoto from '../img/shopping/applebook.jpg';
import bookshopFoto from '../img/shopping/bookshop.jpg';
import errorBooks from '../img/shopping/books.png';
import deleteIcon from '../img/shopping/trash.png';

const divShoppingEl = document.querySelector('.container-shop');
// --------------------SUPPORT UKRAINE---------------------
const swiperSection = document.querySelector('.support-funds-section');

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

function checkScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 1200) {
    swiperSection.classList.add('hidden-section');
  } else {
    swiperSection.classList.remove('hidden-section');
  }
}

// ---------------Rendering function---------------
document.addEventListener('DOMContentLoaded', loadFunction);
function loadFunction() {
  if (
    localStorage.getItem('shoppingList') !== null &&
    JSON.parse(localStorage.getItem('shoppingList')).length !== 0
  ) {
    let container = document.createElement('ul');
    container.classList.add('shopping-list');
    container.id = 'choosen-bookslist';
    let bookInfo = JSON.parse(localStorage.getItem('shoppingList'));
    bookInfo.forEach(book => {
      let liEl = document.createElement('li');
      liEl.dataset.removeIndex = book.id;
      liEl.classList.add('shopping-item', 'list');
      liEl.innerHTML = `<img
                src="${
                  book.book_image
                    ? book.book_image
                    : '../img/shopping/no_cover.jpg'
                }"
                alt="book cover unavailable"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${book.title}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${
                  book.id
                }' >
                  <img src="${deleteIcon}" alt="" width='16'/>
                </button>
                <p class="choosenbook-subtitle">${book.list_name}</p>
                <p class="choosenbook-descr">
                ${
                  book.description
                    ? book.description
                    : 'No description available.'
                }
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${book.author}</p>
                <ul class="market-list">
                    <li class="list">
                    <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer"><img src="${amazonFoto}" alt="amazon" width='32'/></a>
                  </li>
                  <li class="list">
                    <a href="https://www.apple.com/apple-books/" target="_blank" rel="noopener noreferrer"><img src="${applebookFoto}" alt="applebook" width='16'/></a>
                  </li>
                  <li class="list">
                    <a href="https://bookshop.org/" target="_blank" rel="noopener noreferrer"><img src="${bookshopFoto}" alt="bookshop" width='16'/></a>
                  </li>
                  </ul>
                </div>`;
      container.appendChild(liEl);
    });
    divShoppingEl.appendChild(container);
    const shoppingListEl = document.getElementById('choosen-bookslist');
    shoppingListEl.addEventListener('click', findIndexBook);
  } else {
    let error = `<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="${errorBooks}"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;
    divShoppingEl.insertAdjacentHTML('beforeend', error);
  }
}

// ---------------Deleting functions---------------

function findIndexBook(event) {
  if (
    event.target.dataset.removeItem ||
    event.target.closest('[data-remove-item]')
  ) {
    let missClick = event.target.closest('[data-remove-item]');
    let id = event.target.dataset.removeItem || missClick.dataset.removeItem;
    const listItems = document.querySelectorAll('.shopping-item');
    removeClickedBook(listItems, id);
  }
}

function removeClickedBook(bookList, id) {
  let items = Array.from(bookList);
  let item = items.findIndex(el => el.dataset.removeIndex === id);
  let removedItem = items.splice(item, 1);
  removedItem[0].remove();

  let bookInfo = JSON.parse(localStorage.getItem('shoppingList'));
  let filteredArray = bookInfo.filter(item => item.id !== id);
  localStorage.setItem('shoppingList', JSON.stringify(filteredArray));

  if (bookList.length === 1) {
    let error = `<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="${errorBooks}"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;
    divShoppingEl.insertAdjacentHTML('beforeend', error);
  }
}
