"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const addGlass = document.querySelector(".counter__button--add--js");
const removeGlass = document.querySelector(".counter__button--remove--js");
const glassCounter = document.querySelector(".counter__number--js");
let count = 0;
const water = document.querySelector(".water");
const date = new Date().toISOString().slice(0, 10);
const history = document.querySelector(".history__value--js");
const historyEntry = document.createElement("li");

if (localStorage.length > 0) {
  addGlass.addEventListener("click", (e) => {
    count += 1;
    localStorage.setItem(date, JSON.stringify(count));
    glassCounter.innerHTML = count;
  });

  removeGlass.addEventListener("click", (e) => {
    if (count >= 1) {
      count -= 1;
      localStorage.setItem(date, JSON.stringify(count));
      glassCounter.innerHTML = count;
    };
  });
}
else {
  count = 0;
}



for (let i = 0; i < localStorage.length; i++) {
  let historyEntryData = `${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))} szklanek.`;
  const historyEntry = document.createElement("li");
  historyEntry.innerHTML = historyEntryData;
  history.appendChild(historyEntry);
  historyEntry.style.cssText = "color:#fff; padding-top:14px; font-size:14px;)";

}



