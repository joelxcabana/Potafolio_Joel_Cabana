var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");

btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})


var items = document.getElementsByClassName('menu__link');

for (var i=0; i< items.length; i++) {
    items[i].addEventListener("click",function() {
      nav.classList.toggle('mostrar');
    });
}
