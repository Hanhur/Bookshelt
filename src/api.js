import axios from 'axios';

export{booksCategory}
export{selectedCategory}
export{topBooks}
export{detalsInformBook}


async function booksCategory () {
  const bazUrl = ' https://books-backend.p.goit.global/books/category-list ';
const respons = await axios.get (bazUrl);
  return respons;
}

async function selectedCategory(name){
  const bazUrl = 'https://books-backend.p.goit.global/books/category?'
  const books = await axios.get(`${bazUrl}category=${name}`);
  return books
}
async function topBooks(){
  const bazUrl = ' https://books-backend.p.goit.global/books/top-books '
  const topBooks = await axios.get(bazUrl)
  return topBooks
}
async function detalsInformBook(name){
const bazUrl ='https://books-backend.p.goit.global/books/'
  const informBook = await axios.get(`${bazUrl}${name}`)
  return informBook
}
