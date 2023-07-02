const shoppingListEl = document.getElementById('choosen-bookslist');
const removeBtnEl = document.getElementById('book-remove');
const divShoppingEl = document.querySelector('.container-shop');

import bookDum from '../img/shopping/book_dum.jpg';
import amazonFoto from '../img/shopping/amazon.jpg';
import applebookFoto from '../img/shopping/applebook.jpg';
import bookshopFoto from '../img/shopping/bookshop.jpg';
import errorBooks from '../img/shopping/books.jpg';

let choosenBooks = {
  src: bookDum,
  title: 'I will find you',
  subtitle: 'Hardcover fiction',
  description:
    'David Burroughs was once a devoted father to his three-year-old son Matthew ',
  author: 'Harlan Coben',
};
localStorage.setItem('choosenBooks', JSON.stringify(choosenBooks));

window.addEventListener('load', loadFunction);
function loadFunction() {
  let container = document.createDocumentFragment();
  if (localStorage.getItem('choosenBooks') !== null) {
    let bookInfo = JSON.parse(localStorage.getItem('choosenBooks'));
    const { src, title, subtitle, description, author } = bookInfo;
    for (let i = 0; i <= 5; i++) {
      let liEl = document.createElement('li');
      liEl.dataset.dataRemoveIndex = i;
      liEl.classList.add('shopping-item', 'list');
      liEl.innerHTML = `<img
                src="${src}"
                alt="example of book"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${title}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${i}' >
                  <svg width="16" height="16">
                    <use href="./img/shopping/spriteShopping.svg#icon-trash"></use>
                  </svg>
                </button>
                <p class="choosenbook-subtitle">${subtitle}</p>
                <p class="choosenbook-descr">
                ${description}
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${author}</p>
                <ul class="market-list">
                    <li class="list">
                    <a href=""><img src="${amazonFoto}" alt="amazon" /></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${applebookFoto}" alt="applebook" /></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${bookshopFoto}" alt="bookshop" /></a>
                  </li>
                  </ul>
                </div>`;
      container.appendChild(liEl);
    }
    shoppingListEl.appendChild(container);
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
  let item = items.findIndex(el => el.dataset.dataRemoveIndex === id);
  let removedItem = items.splice(item, 1);
  console.log('removedItem', removedItem);
  removedItem[0].remove();
}
