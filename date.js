// Hare una funcion para hacer un evento cuando el puntero se ponga sobe el elemento
/*var elementos = document.querySelectorAll('p');
var cajaGrande = document.querySelector('.numberBox');

elementos.forEach(function(elemento){
  elemento.addEventListener('mouseover', function(){
    cajaGrande.textContent = this.textContent;
    var estilo = window.getComputedStyle (elemento);
    var color = estilo.getPropertyValue('color')
    cajaGrande.style.color = color;
  })
})*/


let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll('.cta')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

abrir.addEventListener('click',function(e){
  e.preventDefault();
  modalC.style.opacity="1";
  modalC.style.visibility="visible";
  modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click',function(){
  modal.classList.toggle('modal-close');
  setTimeout(function(){
    modalC.style.opacity="0";
    modalC.style.visibility="hidden";
  },900)
});

window.addEventListener('click',function(e){
  console.log(e.target)
  if(e.target == modalC){
    modal.classList.toggle('modal-close');
    setTimeout(function(){
      modalC.style.opacity="0";
      modalC.style.visibility="hidden";
    },600)
  }
});

//SEGUNDO MODAL


// let cerrarDos = document.querySelectorAll('.closeDos')[0];
// let abrirDos = document.querySelectorAll('.ctaDos')[0];
// let modalDos = document.querySelectorAll('.modalDos')[0];
// let modalCDos = document.querySelectorAll('.modal-containerDos')[0];

// abrirDos.addEventListener('click',function(a){
//   a.preventDefault();
//   modalCDos.style.opacity="1";
//   modalCDos.style.visibility="visible";
//   modalDos.classList.toggle('modal-closeDos');
// });

// cerrarDos.addEventListener('click',function(){
//   modal.classList.toggle('modal-closeDos');
//   setTimeout(function(){
//     modalCDos.style.opacity="0";
//     modalCDos.style.visibility="hidden";
//   },900)
// });

// window.addEventListener('click',function(a){
//   console.log(a.target)
//   if(e.target == modalCDos){
//     modalDos.classList.toggle('modal-closeDos');
//     setTimeout(function(){
//       modalCDos.style.opacity="0";
//       modalCDos.style.visibility="hidden";
//     },600)
//   }
// });




window.addEventListener ('DOMContentLoaded', function (e) {
  var box = document.getElementById ('box');
  var elementBoxes = document.querySelectorAll ('body > div.tableMain > div.grupo > div.element > p.number');

  function updateBoxData (number, symbAbbr, name, style) {
    if (box) {
      box.children[0].innerHTML = number;
      box.children[1].innerHTML = symbAbbr;
      box.children[2].innerHTML = name;
      box.parentElement.className = 'GasBox ' + style;
    }
  }

  elementBoxes.forEach (element => {
    element.parentElement.addEventListener ('mouseenter', function (e) {
        currentBox = e.target;
        style = currentBox.className.replace ('element ', '');
        console.log (style);
        updateBoxData (
          currentBox.children[0].innerHTML,
          currentBox.children[1].innerHTML,
          currentBox.children[2].innerHTML,
          style
        );
    });
  })
});



window.addEventListener ('DOMContentLoaded', function (e) {
  var box = document.getElementById ('box');
  var elementBoxes = document.querySelectorAll ('body > div.tableMain-Dos > div.element > p.number');

  function updateBoxData (number, symbAbbr, name, style) {
    if (box) {
      box.children[0].innerHTML = number;
      box.children[1].innerHTML = symbAbbr;
      box.children[2].innerHTML = name;
      box.parentElement.className = 'GasBox ' + style;
    }
  }

  elementBoxes.forEach (element => {
    element.parentElement.addEventListener ('mouseenter', function (e) {
        currentBox = e.target;
        style = currentBox.className.replace ('element ', '');
        console.log (style);
        updateBoxData (
          currentBox.children[0].innerHTML,
          currentBox.children[1].innerHTML,
          currentBox.children[2].innerHTML,
          style
        );
    });
  })
});



