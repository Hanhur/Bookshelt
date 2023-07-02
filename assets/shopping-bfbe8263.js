(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c=document.getElementById("choosen-books");document.getElementById("book-remove");const d=document.querySelector(".container-shop");let m={src:"./img/shopping/book_dum.jpg",title:"I will find you",subtitle:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew ",author:"Harlan Coben"};localStorage.setItem("choosenBooks",JSON.stringify(m));window.addEventListener("load",p);function p(){let s=document.createDocumentFragment();if(localStorage.getItem("choosenBooks")!==null){let t=JSON.parse(localStorage.getItem("choosenBooks"));const{src:i,title:r,subtitle:e,description:o,author:n}=t;for(let l=0;l<=5;l++){let a=document.createElement("li");a.dataset.dataRemoveIndex=l,a.classList.add("shopping-item","list"),a.innerHTML=`<img
                src="${i}"
                alt="example of book"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${r}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${l}' >
                  <svg width="16" height="16">
                    <use href="../img/shopping/spriteShopping.svg#icon-trash"></use>
                  </svg>
                </button>
                <p class="choosenbook-subtitle">${e}</p>
                <p class="choosenbook-descr">
                ${o}
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${n}</p>
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
                </div>`,s.append(a)}c.append(s),c.addEventListener("click",g)}else{let t=`<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="./img/shopping/books.jpg"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;d.insertAdjacentHTML("beforeend",t)}}function g(s){if(s.target.dataset.removeItem||s.target.closest("[data-remove-item]")){let t=s.target.closest("[data-remove-item]"),i=s.target.dataset.removeItem||t.dataset.removeItem;const r=document.querySelectorAll(".shopping-item");h(r,i)}}function h(s,t){let i=Array.from(s),r=i.findIndex(o=>o.dataset.dataRemoveIndex===t),e=i.splice(r,1);console.log("removedItem",e),e[0].remove()}
