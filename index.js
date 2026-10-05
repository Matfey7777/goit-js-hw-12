import{a as y,S as L,i}from"./assets/vendor-C1DvvBV_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();y.defaults.baseURL="https://pixabay.com/api/";async function g(t,s){return(await y.get("/",{params:{q:t,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,key:"57805078-134aca3c8ad054738ba6853d0"}})).data}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader")},v=new L(".gallery a");function m(t){const s=t.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="gallery-info">
            <div class="gallery-info-item">
              <span class="gallery-info-title">Likes</span>
              <span>${e.likes}</span>
            </div>

            <div class="gallery-info-item">
              <span class="gallery-info-title">Views</span>
              <span>${e.views}</span>
            </div>

            <div class="gallery-info-item">
              <span class="gallery-info-title">Comments</span>
              <span>${e.comments}</span>
            </div>

            <div class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span>
              <span>${e.downloads}</span>
            </div>
          </div>
        </li>
      `).join("");o.gallery.insertAdjacentHTML("beforeend",s),v.refresh()}function w(){o.gallery.innerHTML=""}function h(){o.loader.classList.remove("is-hidden")}function p(){o.loader.classList.add("is-hidden")}function u(){o.loadMore.classList.remove("is-hidden")}function c(){o.loadMore.classList.add("is-hidden")}let n=1,l="";o.form.addEventListener("submit",b);o.loadMore.addEventListener("click",S);async function b(t){if(t.preventDefault(),l=new FormData(t.currentTarget).get("search-text").trim(),!!l){n=1,w(),c(),h();try{const e=await g(l,n);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(e.hits),n*15>=e.totalHits?(c(),i.info({message:"We're sorry, but you've reached the end of search results."})):u()}catch{i.error({message:"Something went wrong. Please try again."})}finally{p()}}}async function S(){n+=1,c(),h();try{const t=await g(l,n);m(t.hits);const e=o.gallery.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),n*15>=t.totalHits?(c(),i.info({message:"We're sorry, but you've reached the end of search results."})):u()}catch{n-=1,i.error({message:"Something went wrong. Please try again."}),u()}finally{p()}}
//# sourceMappingURL=index.js.map
