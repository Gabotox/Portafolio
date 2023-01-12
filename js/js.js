let icon = document.querySelector(".nav-responsive");
icon.addEventListener("click", mostrar);
let bajo = document.getElementById("abajo");
bajo.addEventListener("click", tapar);
nav = document.getElementById("nav");
let quitar = document.getElementById("cerrar");
quitar.addEventListener("click", tapar)
let items = document.querySelectorAll(".lin");
items.forEach((item) => {
    item.addEventListener("click", tapar);
})

function mostrar() {
    nav.style.left = "0px";
    bajo.style.display = "block";
}

function tapar() {
    nav.style.left = "-90%";
    bajo.style.display = "none";

}

//Funcion que me aplica el estilo  a la opcion seleccionada en el menu y quita la previamente seleccionado
 function seleccionar(link){
     var opciones = document.querySelectorAll('.correr');
     link.classList.add("activar"); 
     link = Array.from(opciones).find(ese =>{
        for (const ese of opciones) {
              if (ese !== link) {
                    ese.classList.remove('activar');
              }
        }
     })
                  
 }




let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 2500;

window.addEventListener("resize", function () {
    tamañoWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo() {
    slides()
}, intervalo);

function slides() {
    slider.style.transform = 'translate(' + (- tamañoWidth * contador) + 'px';

    slider.style.transition = 'transform 1s';

    contador++;

    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 1s'
        }, intervalo)
    } else {

    }
}
function slides2() {
    slider.style.transform = 'translate(' + (+ tamañoWidth * contador) + 'px';

    slider.style.transition = 'transform 1s';

    contador--;

    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s'
        }, intervalo)
    } else {

    }
}








AOS.init();