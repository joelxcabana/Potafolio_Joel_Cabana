var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");

btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})

var btnOcultar = document.getElementById("btn-ocultar");

btnOcultar.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})
