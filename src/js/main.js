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
const water = document.querySelector(".water");
const date = new Date().toISOString().slice(0, 10);
const history = document.querySelector(".history__value--js");
const historyEntry = document.createElement("li");


if (!localStorage.getItem(date)) {
  localStorage.setItem(date, 0);
  glassCounter.innerHTML = "0";
}
else {
  glassCounter.innerHTML = localStorage.getItem(date);
}

addGlass.addEventListener("click", (e) => {
  localStorage.setItem(date, parseInt(localStorage.getItem(date)) + 1)
  glassCounter.innerHTML = localStorage.getItem(date);
  water.classList.add("water-sip");
})

removeGlass.addEventListener("click", (e) => {
  const count = parseInt(localStorage.getItem(date));
  if (count > 0) {
    localStorage.setItem(date, localStorage.getItem(date) - 1)
    glassCounter.innerHTML = localStorage.getItem(date);
  }
});

addGlass.addEventListener("mouseout", (e) => {
  water.classList.remove("water-sip");
 });

for (let i = 0; i < localStorage.length; i++) {
  let historyEntryData = `${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))} szklanek.`;
  const historyEntry = document.createElement("li");
  historyEntry.innerHTML = historyEntryData;
  history.appendChild(historyEntry);
  historyEntry.style.cssText = "color:#fff; padding-top:14px; font-size:14px;";
}





