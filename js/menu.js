// "use strict";
let menu = document.getElementById('menu');
let enlaces = document.getElementById('enlaces');
let itemMenu1 = document.getElementById('item-menu1');
let itemMenu2 = document.getElementById('item-menu2');
let itemMenu3 = document.getElementById('item-menu3');
let itemMenu4 = document.getElementById('item-menu4');
let scroll = document.getElementById('body');
let contador = 0;



menu.addEventListener('click', ()=>{
    if (contador == 0){
        enlaces.className = ('enlaces dos');
        scroll.className = ('no-scroll');
        contador = 1;
        itemMenu1.addEventListener('click', ()=>{
            if (contador == 1){
                enlaces.className = ('enlaces uno');
                scroll.className = ('');

                contador = 0;
            }
        });
        itemMenu2.addEventListener('click', ()=>{
            if (contador == 1){
                enlaces.className = ('enlaces uno');
                scroll.className = ('');
                contador = 0;
            }
        });
        itemMenu3.addEventListener('click', ()=>{
            if (contador == 1){
                enlaces.className = ('enlaces uno');
                scroll.className = ('');
                contador = 0;
            }
        });
        itemMenu4.addEventListener('click', ()=>{
            if (contador == 1){
                enlaces.className = ('enlaces uno');
                scroll.className = ('');
                contador = 0;
            }
        });
        
    }
    else{
        enlaces.className = ('enlaces uno');
        scroll.className = ('');
        contador = 0;
    }
});

