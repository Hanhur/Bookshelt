const categoryUL = document.getElementsByClassName('ul-categories')[0]

window.onload = async () => {
  let data = await getFromAPI()

  data.data.forEach(element => {
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.innerHTML = element.list_name
    button.type = 'button'

    let className = element.list_name.split(' ').join('_')
    button.classList.add(`categories-${className}`)
    button.classList.add(`categories-all`)
     button.classList.add(`categories-osn`)

    li.append(button)

    categoryUL.appendChild(li)
  })

  const categoryButtons = document.querySelectorAll('.ul-categories button');
  const allCategoriesButton = document.querySelector('.all-categories button');
  allCategoriesButton.classList.add('active');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', handleCategoryClick);
  });
  
  function handleCategoryClick(event) {
    const selectedButton = event.target;
    const category = selectedButton.classList[0].split('-')[1];
  
    let activeButton = document.getElementsByClassName('active')[0]
  
    activeButton.classList.remove('active')
  
    selectedButton.classList.add('active');
  
    const books = document.getElementsByClassName('book');
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      if (category === 'all' || book.classList.contains(category)) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    }
  }
  
  function showAllCategories() {
    let activeButton = document.getElementsByClassName('active')[0]
  
    activeButton.classList.remove('active')
  
    allCategoriesButton.classList.add('active');
  
    const books = document.getElementsByClassName('book');
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      book.style.display = 'block';
    }
  }
  
  showAllCategories(); 
}

async function getFromAPI() {
  return await axios.get("https://books-backend.p.goit.global/books/category-list")
}

(function ($) {
    $(window).on("load", function () {
        $(".mycustom-scroll").mCustomScrollbar();
    });
})(jQuery);