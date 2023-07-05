import bookDum from '../img/shopping/book_dum.jpg';
import amazonFoto from '../img/shopping/amazon.jpg';
import applebookFoto from '../img/shopping/applebook.jpg';
import bookshopFoto from '../img/shopping/bookshop.jpg';
import errorBooks from '../img/shopping/books.jpg';
import deleteIcon from '../img/shopping/trash.png';

const divShoppingEl = document.querySelector('.container-shop');

// ---------------Rendering function---------------
document.addEventListener('DOMContentLoaded', loadFunction);
function loadFunction() {
  if (localStorage.getItem('selectedBook') !== null) {
    let container = document.createElement('ul');
    container.classList.add('shopping-list');
    container.id = 'choosen-bookslist';
    let bookInfo = JSON.parse(localStorage.getItem('selectedBook'));
    bookInfo.forEach(
      ({ book_image, title, description, author, buy_links }) => {
        let liEl = document.createElement('li');
        liEl.dataset.removeIndex = i;
        liEl.classList.add('shopping-item', 'list');
        liEl.innerHTML = `<img
                src="${book_image}"
                alt="book cover unavailable"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${title}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${i}' >
                  <img src="${deleteIcon}" alt="" width='16'/>
                </button>
                <p class="choosenbook-subtitle">${subtitle}</p>
                <p class="choosenbook-descr">
                ${description}
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${author}</p>
                <ul class="market-list">
                    <li class="list">
                    <a href=""><img src="${amazonFoto}" alt="amazon" width='32'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${applebookFoto}" alt="applebook" width='16'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${bookshopFoto}" alt="bookshop" width='16'/></a>
                  </li>
                  </ul>
                </div>`;
        container.appendChild(liEl);
      }
    );
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
  let item = items.findIndex(el => el.dataset.dataRemoveIndex === id);
  let removedItem = items.splice(item, 1);
  removedItem[0].remove();
}
