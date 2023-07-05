import{a as d,b as m,c as A,e as p}from"./dark-light-mode-04019912.js";const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgB7ZbhDcIgFISvxv/qBOIEOkJH0Q0cwREcwRHcwBF0A9mgOgFCPCI2bSnQRpv0S5qXUjgur/AAGBkSSqm78nMP0Zxg5Mdk7gv/n0C/yCzLVvblP9eAzkTOFX1BIkaDWnnV97oMSEaBdOaMDwQY6BJroEAItqogEZ9OcAa01p4VceO0Cf0U5hsCaTIgKb4stZuJBaMlxzvVa3ybFa5WqIEuaFyAPgOScYUfGXiURHqhycAT6QYEo0SEgS4yYMc+0YOB2v9aYaC27xThBo76MYXl5rSd8d6WJ/RgYOY26qPUTLwrtZm+VUWok12wQDy2iElEGJCMa8TjzUAtuozOWd+VU1JDxovkA02PPdirNi8p3i1J47n6XOGPiIViVxXPtY3pNka2FCtaTFqw7wEjQ+AFMYZFGttJCQ4AAAAASUVORK5CYII=",c=document.querySelector(".container-shop");document.addEventListener("DOMContentLoaded",g);function g(){if(localStorage.getItem("selectedBook")!==null){let e=document.createElement("ul");e.classList.add("shopping-list"),e.id="choosen-bookslist",JSON.parse(localStorage.getItem("selectedBook")).forEach(({book_image:t,title:r,description:l,author:n,buy_links:I})=>{let a=document.createElement("li");a.dataset.removeIndex=i,a.classList.add("shopping-item","list"),a.innerHTML=`<img
                src="${t}"
                alt="book cover unavailable"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${r}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${i}' >
                  <img src="${h}" alt="" width='16'/>
                </button>
                <p class="choosenbook-subtitle">${subtitle}</p>
                <p class="choosenbook-descr">
                ${l}
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${n}</p>
                <ul class="market-list">
                    <li class="list">
                    <a href=""><img src="${d}" alt="amazon" width='32'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${m}" alt="applebook" width='16'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${A}" alt="bookshop" width='16'/></a>
                  </li>
                  </ul>
                </div>`,e.appendChild(a)}),c.appendChild(e),document.getElementById("choosen-bookslist").addEventListener("click",k)}else{let e=`<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="${p}"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;c.insertAdjacentHTML("beforeend",e)}}function k(e){if(e.target.dataset.removeItem||e.target.closest("[data-remove-item]")){let s=e.target.closest("[data-remove-item]"),o=e.target.dataset.removeItem||s.dataset.removeItem;const t=document.querySelectorAll(".shopping-item");b(t,o)}}function b(e,s){let o=Array.from(e),t=o.findIndex(l=>l.dataset.dataRemoveIndex===s);o.splice(t,1)[0].remove()}
