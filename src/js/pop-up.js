import bookDum from '../img/shopping/book_dum.jpg';
import amazonFoto from '../img/shopping/amazon.jpg';
import applebookFoto from '../img/shopping/applebook.jpg';
import bookshopFoto from '../img/shopping/bookshop.jpg';
import errorBooks from '../img/shopping/books.jpg';
import { detalsInformBook } from './api';



const modal = document.querySelector(".js-modal");
const closeModalBtn = document.querySelector('.js-modal-close');
const overlay = document.querySelector(".overlay");
const addSpoppinList = document.querySelector(".add-btn");
const shoppingListMessage = document.querySelector(".shopping-list-message");



const openModal = function (evt) {
  if(evt.target.localName ==='button'){
    return
  }
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
    document.body.classList.add("modal-open");
fillBookCard(this.id)
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


let container = document.querySelector('.choosenbook-popup-wrapper');

function fillBookCard(id) {
    detalsInformBook(id).then(book => {
        const { book_image, title, description, author, subtitle, buy_links } = book.data;
        let bookMarkup = createBookMarkup(book.data);
        appendBookMarkup(bookMarkup);

 // Додавання об'єкту книги до localStorage
    const bookObject = {
      id,
      book_image,
      title,
      description,
        author,
        subtitle,
        buy_links,
    };
    localStorage.setItem('selectedBook', JSON.stringify(bookObject));

    })
        .catch(error => {
            console.log(error);
        });
}

function createBookMarkup( { book_image, title, description, author, buy_links }) {
return `<img
      src="${book_image}"
      alt="book cover unavailable"
      class="choosenbook-popup-image"
      width="287"
      height="408"
      onerror="this.onerror=null;this.src='${errorBooks}'"
    />
    <div class="description-popup-wrapper">
      <h2 class="choosenbook-popup-title">${title}</h2>
      <p class="choosenbook-popup-author">${author}</p>
      <p class="choosenbook-popup-descr">${description}</p>
      <div class="market-popup-wrapper">
        <ul class="market-popup-list">
          <li class="list">
            <a href="${buy_links[0].url}"><img src="${amazonFoto}" alt="amazon" widht="62" /></a>
          </li>
          <li class="list">
            <a href="${buy_links[1].url}"
              ><img src="${applebookFoto}" alt="applebook" width="32"
            /></a>
          </li>
          <li class="list">
            <a href="${buy_links[2].url}"
              ><img src="${bookshopFoto}" alt="bookshop" width="38"
            /></a>
          </li>
        </ul>
      </div>
    </div>`
}

function appendBookMarkup(categoryMarkup) {
    container.innerHTML = categoryMarkup;
};
 
const shoppingList = []; // Масив корзини шопінг листа


function handleAddClick() {
    const selectedBook = JSON.parse(localStorage.getItem('selectedBook'));
    if (selectedBook) {
        const isBookAlreadyAdded = shoppingList.some(book => book.id === selectedBook.id);
        if (!isBookAlreadyAdded) {
            shoppingList.push(selectedBook);
            updateShoppingListButton(true);
        } else {
            removeBookFromShoppingList(selectedBook.id);
            updateShoppingListButton(false);
        }
    }
}

function updateShoppingListButton(isAdded) {
  if (isAdded) {
        addSpoppinList.textContent = "Remove from the shopping list";
         shoppingListMessage.innerHTML = "<p>Congratulations! You have added the book to the shopping list. To delete, press the button 'Remove from the shopping list'.</p>";
  } else {
        addSpoppinList.textContent = "Add to the shopping list";
        shoppingListMessage.innerHTML = "";
    }
}

function removeBookFromShoppingList(bookId) {
    const index = shoppingList.findIndex(book => book.id === bookId);
    if (index !== -1) {
        shoppingList.splice(index, 1);
    }
}


addSpoppinList.addEventListener('click', handleAddClick);


export { openModal };