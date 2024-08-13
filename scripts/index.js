let textoInput = document.querySelector('#textarea-neon');
let selectInput = document.querySelector('#select-neon');
let fontInput = document.querySelector('#font');
let colorInput = document.querySelector('#color');
let sizeInput = document.querySelector('#size');
let generateButton = document.querySelector('#generate');

let textoTela = document.querySelector('#tela h2');


/* Função que muda o conteudo do texto */
textoInput.addEventListener('keyup',(e)=>{
    if(e.target.value.trim() == ""){
        textoTela.innerHTML = "Texto Neon";
        return;
    }
    textoTela.innerHTML = e.target.value;
})

/*Função que muda as fontes*/
fontInput.addEventListener('change',(e)=>{
    document.documentElement.style.setProperty('--font-family', e.target.value);
    textoTela.style.fontFamily = e.target.value;
})

/*Função que muda a cor*/
colorInput.addEventListener('change',(e)=>{
    document.documentElement.style.setProperty('--neon-color', e.target.value);

})

/*Função que muda o tamanho*/
sizeInput.addEventListener('change',(e)=>{
    document.documentElement.style.setProperty('--neon-size', e.target.value + 'px');
})