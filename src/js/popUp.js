const modalWrapper = document.querySelector('.modal-wrapper');
const closeButton = document.querySelector('.btn-close');
const backdrop = document.querySelector('.modal-wrapper.modal');
const shoppingListButton = document.querySelector('.add-to-cart');
const tradeLinks = document.querySelectorAll('.modal-link-img');

closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
window.addEventListener('keydown', handleKeyDown);
shoppingListButton.addEventListener('click', toggleShoppingList);
tradeLinks.forEach(link => link.addEventListener('click', openTradeLink));

function openModal() {
  modalWrapper.classList.add('active');
  disableScroll();
}

function closeModal() {
  modalWrapper.classList.remove('active');
  enableScroll();
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}


function toggleShoppingList() {
  const bookId = document.querySelector('.book').getAttribute('data-book-id');
  const shoppingList = getShoppingList();

  if (shoppingList.includes(bookId)) {
    const updatedList = shoppingList.filter(id => id !== bookId);
    saveShoppingList(updatedList);
    shoppingListButton.textContent = 'ADD TO SHOPPING LIST';
  } else {
    const updatedList = [...shoppingList, bookId];
    saveShoppingList(updatedList);
    shoppingListButton.textContent = 'REMOVE FROM SHOPPING LIST';
  }
}


function openTradeLink(event) {
  event.preventDefault();
  const tradeLink = event.target.parentNode.href;
  window.open(tradeLink, '_blank');
}

openModal();

