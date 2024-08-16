let textoInput = document.querySelector('#textarea-neon');
let selectInput = document.querySelector('#select-neon');
let fontInput = document.querySelector('#font');
let colorInput = document.querySelector('#color');
let sizeInput = document.querySelector('#size');
let generateButton = document.querySelector('#generate');
let tamanhoText = document.querySelector('#actual');
let btnOnOffEffect = document.querySelector('#on-off-effect');
let alignInputs = document.querySelectorAll('.align-forms input');
let onOffEffect = true;

let textoTela = document.querySelector('#tela h2');

/* Função que muda o alinhamento do texto */
alignInputs.forEach((input)=>{
    input.addEventListener('change',()=>{
        if(input.value == 'left'){
            textoTela.style.textAlign = 'left';
        }else if(input.value == 'center'){
            textoTela.style.textAlign = 'center';
        }else if(input.value == 'right'){
            textoTela.style.textAlign = 'right';
        }
    })
})
/* Função que ativa e desativa o efeito neon */
btnOnOffEffect.addEventListener('click',()=>{
    if(onOffEffect){
        btnOnOffEffect.classList.remove('active');
        textoTela.classList.add('off');
        onOffEffect = false;
    }else{
        btnOnOffEffect.classList.add('active');
        textoTela.classList.remove('off');
        onOffEffect = true;
    }
})
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
    tamanhoText.innerHTML = e.target.value + 'CM';
})

/*Função que muda o fundo da tela*/