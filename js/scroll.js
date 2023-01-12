window.addEventListener('scroll',function(){

    var titulo = document.querySelectorAll('#efecto');

    for (let i = 0; i < titulo.length; i++) {
        var altura = window.innerHeight/1.1;

    var distancia = titulo[i].getBoundingClientRect().top;
    
    console.log(altura);
    console.log(distancia);


    titulo[i].classList.add('transform_up');
    
    if (distancia <= altura) {
        titulo[i].classList.add('aparece')
    } else {
        titulo[i].classList.remove('aparece');
    }    
    }

    
})