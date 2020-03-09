"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const addGlass= document.querySelector(".counter__button--add--js");
const removeGlass= document.querySelector(".counter__button--remove--js");
let glassCounter= document.querySelector(".counter__number--js");
let count=0;
const water= document.querySelector(".water");
const date= new Date().toISOString().slice(0,10);
const history = document.querySelector(".history__value");

if(date){

addGlass.addEventListener("click", (e) => {
  count += 1;
  glassCounter.innerHTML = count;
  localStorage.setItem(date, count);
});

removeGlass.addEventListener("click", (e) => {
  if(count>=1){
  count -= 1;
  glassCounter.innerHTML = count;
  };
  localStorage.setItem(date, count);
});
  
}
else{
  count=0;
}

history.innerHTML= `W dniu ${date} wypiłeś ${localStorage.getItem(date)} szklanek wody`;






