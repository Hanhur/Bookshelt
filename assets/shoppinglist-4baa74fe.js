import"./modulepreload-polyfill-ec808ebb.js";const n=document.getElementById("choosen-books");document.getElementById("book-remove");const p=document.querySelector(".container-shop");let m={src:"./img/shopping/book_dum.jpg",title:"I will find you",subtitle:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew ",author:"Harlan Coben"};localStorage.setItem("choosenBooks",JSON.stringify(m));window.addEventListener("load",d);function d(){let e=document.createDocumentFragment();if(localStorage.getItem("choosenBooks")!==null){let o=JSON.parse(localStorage.getItem("choosenBooks"));const{src:t,title:s,subtitle:i,description:r,author:c}=o;for(let a=0;a<=5;a++){let l=document.createElement("li");l.dataset.dataRemoveIndex=a,l.classList.add("shopping-item","list"),l.innerHTML=`<img
                src="${t}"
                alt="example of book"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${s}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${a}' >
                  <svg width="16" height="16">
                    <use href="../img/shopping/spriteShopping.svg#icon-trash"></use>
                  </svg>
                </button>
                <p class="choosenbook-subtitle">${i}</p>
                <p class="choosenbook-descr">
                ${r}
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${c}</p>
                <ul class="market-list">
                    <li class="list">
                    <a href=""><img src="./img/shopping/amazon.jpg" alt="amazon" /></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="./img/shopping/applebook.jpg" alt="applebook" /></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="./img/shopping/bookshop.jpg" alt="bookshop" /></a>
                  </li>
                </div>`,e.append(l)}n.append(e),n.addEventListener("click",h)}else{let o=`<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="./img/shopping/books.jpg"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;p.insertAdjacentHTML("beforeend",o)}}function h(e){if(e.target.dataset.removeItem||e.target.closest("[data-remove-item]")){let o=e.target.closest("[data-remove-item]"),t=e.target.dataset.removeItem||o.dataset.removeItem;const s=document.querySelectorAll(".shopping-item");g(s,t)}}function g(e,o){let t=Array.from(e),s=t.findIndex(r=>r.dataset.dataRemoveIndex===o),i=t.splice(s,1);console.log("removedItem",i),i[0].remove()}
