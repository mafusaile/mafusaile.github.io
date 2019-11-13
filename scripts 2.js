"use strict";

function showPageCakes(v){
  let pagesCakes = document.getElementsByClassName('pageCakes');
  for(let i = 0; i < pagesCakes.length; i++){
    pagesCakes[i].style.display = 'none';
  }
    pagesCakes[v-1].style.display = 'block';
}      
function showPageGingerbread(v){
  let pagesGingerbread = document.getElementsByClassName('pageGingerbread');
  for(let i = 0; i < pagesGingerbread.length; i++){
    pagesGingerbread[i].style.display = 'none';
  }
    pagesGingerbread[v-1].style.display = 'block';
} 
function showPageOther(v){
  let pagesOther = document.getElementsByClassName('pageOther');
  for(let i = 0; i < pagesOther.length; i++){
    pagesOther[i].style.display = 'none';
  }
    pagesOther[v-1].style.display = 'block';
}   
function addClassActive(){
  let cakes = document.getElementById('cakes');
  let gingerbread = document.getElementById('gingerbread');
  let other = document.getElementById('other');
  let order = document.getElementById('order');
  document.querySelector('.menu.active').classList.remove('active');
  event.target.classList.add('active');
  if(document.querySelector('.cakes.active')){
    cakes.style.display = 'block';
    showPageCakes(1);
    main.style.display = 'none';
    gingerbread.style.display = 'none';
    other.style.display = 'none';
    order.style.display = 'none';
  }
  if(document.querySelector('.gingerbread.active')){
    cakes.style.display = 'none';
    main.style.display = 'none';
    gingerbread.style.display = 'block';
    showPageGingerbread(1);
    other.style.display = 'none';
    order.style.display = 'none';
  }
  if(document.querySelector('.other.active')){
    cakes.style.display = 'none';
    main.style.display = 'none';
    gingerbread.style.display = 'none';
    other.style.display = 'block';
    showPageOther(1);
    order.style.display = 'none';
  }
  if(document.querySelector('.order.active')){
    cakes.style.display = 'none';
    main.style.display = 'none';
    gingerbread.style.display = 'none';
    other.style.display = 'none';
    order.style.display = 'block';
  }
  if(document.querySelector('.main.active')){
    cakes.style.display = 'none';
    main.style.display = 'block';
    gingerbread.style.display = 'none';
    other.style.display = 'none';
    order.style.display = 'none';
  }
}