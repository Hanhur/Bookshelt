import{a as d,b as h,c as m,e as A}from"./books-7bd96aa4.js";const p="/Bookshelt/assets/book_dum-d61d6a16.jpg";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgB7ZbhDcIgFISvxv/qBOIEOkJH0Q0cwREcwRHcwBF0A9mgOgFCPCI2bSnQRpv0S5qXUjgur/AAGBkSSqm78nMP0Zxg5Mdk7gv/n0C/yCzLVvblP9eAzkTOFX1BIkaDWnnV97oMSEaBdOaMDwQY6BJroEAItqogEZ9OcAa01p4VceO0Cf0U5hsCaTIgKb4stZuJBaMlxzvVa3ybFa5WqIEuaFyAPgOScYUfGXiURHqhycAT6QYEo0SEgS4yYMc+0YOB2v9aYaC27xThBo76MYXl5rSd8d6WJ/RgYOY26qPUTLwrtZm+VUWok12wQDy2iElEGJCMa8TjzUAtuozOWd+VU1JDxovkA02PPdirNi8p3i1J47n6XOGPiIViVxXPtY3pNka2FCtaTFqw7wEjQ+AFMYZFGttJCQ4AAAAASUVORK5CYII=";let u={src:p,title:"I will find you",subtitle:"Hardcover fiction",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall. ",author:"Harlan Coben"};localStorage.setItem("choosenBooks",JSON.stringify(u));const n=document.querySelector(".container-shop");window.addEventListener("load",k);function k(){let e=document.createElement("ul");if(e.classList.add("shopping-list"),e.id="choosen-bookslist",localStorage.getItem("choosenBooks")!==null){let o=JSON.parse(localStorage.getItem("choosenBooks"));const{src:t,title:s,subtitle:r,description:l,author:c}=o;for(let a=0;a<=5;a++){let i=document.createElement("li");i.dataset.removeIndex=a,i.classList.add("shopping-item","list"),i.innerHTML=`<img
                src="${t}"
                alt="book cover unavailable"
                class="choosenbook-image"
                width="100"
                height="142"
              />
              <div class="choosenbook-wrapper">
                <h2 class="choosenbook-title">${s}</h2>
                <button type="button" class="choosenbook-remove" data-remove-item='${a}' >
                  <img src="${g}" alt="" width='16'/>
                </button>
                <p class="choosenbook-subtitle">${r}</p>
                <p class="choosenbook-descr">
                ${l}
                </p>
                <div class="market-wrapper">
                  <p class="choosenbook-author">${c}</p>
                <ul class="market-list">
                    <li class="list">
                    <a href=""><img src="${d}" alt="amazon" width='32'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${h}" alt="applebook" width='16'/></a>
                  </li>
                  <li class="list">
                    <a href=""><img src="${m}" alt="bookshop" width='16'/></a>
                  </li>
                  </ul>
                </div>`,e.appendChild(i)}n.appendChild(e),document.getElementById("choosen-bookslist").addEventListener("click",b)}else{let o=`<p class="shopping-error">
            This page is empty, add some books and proceed to order.
          </p>
          <img
            src="${A}"
            alt="load-error"
            class="shopimage-error"
            width="265"
            height="198"/>`;n.insertAdjacentHTML("beforeend",o)}}function b(e){if(e.target.dataset.removeItem||e.target.closest("[data-remove-item]")){let o=e.target.closest("[data-remove-item]"),t=e.target.dataset.removeItem||o.dataset.removeItem;const s=document.querySelectorAll(".shopping-item");v(s,t)}}function v(e,o){let t=Array.from(e),s=t.findIndex(l=>l.dataset.dataRemoveIndex===o);t.splice(s,1)[0].remove()}
