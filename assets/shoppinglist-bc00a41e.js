import{a as p,b as m,c as g,e as l}from"./dark-light-mode-3acc7910.js";const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgB7ZbhDcIgFISvxv/qBOIEOkJH0Q0cwREcwRHcwBF0A9mgOgFCPCI2bSnQRpv0S5qXUjgur/AAGBkSSqm78nMP0Zxg5Mdk7gv/n0C/yCzLVvblP9eAzkTOFX1BIkaDWnnV97oMSEaBdOaMDwQY6BJroEAItqogEZ9OcAa01p4VceO0Cf0U5hsCaTIgKb4stZuJBaMlxzvVa3ybFa5WqIEuaFyAPgOScYUfGXiURHqhycAT6QYEo0SEgS4yYMc+0YOB2v9aYaC27xThBo76MYXl5rSd8d6WJ/RgYOY26qPUTLwrtZm+VUWok12wQDy2iElEGJCMa8TjzUAtuozOWd+VU1JDxovkA02PPdirNi8p3i1J47n6XOGPiIViVxXPtY3pNka2FCtaTFqw7wEjQ+AFMYZFGttJCQ4AAAAASUVORK5CYII=",r=document.querySelector(".container-shop"),n=document.querySelector(".support-funds-section");window.addEventListener("load",c);window.addEventListener("resize",c);function c(){window.innerWidth<1200?n.classList.add("hidden-section"):n.classList.remove("hidden-section")}document.addEventListener("DOMContentLoaded",A);function A(){if(console.log("SHOPPING LIST",JSON.parse(localStorage.getItem("shoppingList")).length),localStorage.getItem("shoppingList")!==null&&JSON.parse(localStorage.getItem("shoppingList")).length!==0){let e=document.createElement("ul");e.classList.add("shopping-list"),e.id="choosen-bookslist",JSON.parse(localStorage.getItem("shoppingList")).forEach(t=>{let i=document.createElement("li");i.dataset.removeIndex=t.id,i.classList.add("shopping-item","list"),i.innerHTML=`<img
                src="${t.book_image}"
                alt="book cover unavailable"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${t.title}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${t.id}' >
                  <img src="${h}" alt="" width='16'/>
                </button>
                <p class="choosenbook-subtitle">${t.list_name}</p>
                <p class="choosenbook-descr">
                ${t.description}
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${t.author}</p>
                <ul class="market-list">
                    <li class="list">
                    <a href=""><img src="${p}" alt="amazon" width='32'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${m}" alt="applebook" width='16'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${g}" alt="bookshop" width='16'/></a>
                  </li>
                  </ul>
                </div>`,e.appendChild(i)}),r.appendChild(e),document.getElementById("choosen-bookslist").addEventListener("click",I)}else{let e=`<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="${l}"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;r.insertAdjacentHTML("beforeend",e)}}function I(e){if(e.target.dataset.removeItem||e.target.closest("[data-remove-item]")){let o=e.target.closest("[data-remove-item]"),s=e.target.dataset.removeItem||o.dataset.removeItem;const t=document.querySelectorAll(".shopping-item");S(t,s)}}function S(e,o){let s=Array.from(e),t=s.findIndex(a=>a.dataset.removeIndex===o);s.splice(t,1)[0].remove();let d=JSON.parse(localStorage.getItem("shoppingList")).filter(a=>a.id!==o);if(localStorage.setItem("shoppingList",JSON.stringify(d)),e.length===1){let a=`<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="${l}"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;r.insertAdjacentHTML("beforeend",a)}}
