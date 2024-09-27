let textoInput = document.querySelector('#textarea-neon');
let selectInput = document.querySelector('#select-neon');
let fontInput = document.querySelector('#font');
let colorInput = document.querySelector('#color');
let sizeInput = document.querySelector('#size');
let generateButton = document.querySelector('#generate');
let tamanhoText = document.querySelector('#actual');
let btnOnOffEffect = document.querySelector('#on-off-effect');
let alignInputs = document.querySelectorAll('.align-forms input');
let linesInput = document.querySelector('#select-lines-neon');
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
    data_Neon.text = e.target.value;
    data_Neon.length = e.target.value.length;
    textoTela.innerHTML = e.target.value;
    gerarPreco();
})

/*Função que muda as fontes*/
fontInput.addEventListener('change',(e)=>{
    document.documentElement.style.setProperty('--font-family', e.target.value);
    textoTela.style.fontFamily = e.target.value;
    data_Neon.font = e.target.value;
    gerarPreco();
})

/*Função que muda a cor*/
colorInput.addEventListener('change',(e)=>{
    document.documentElement.style.setProperty('--neon-color', e.target.value);
    data_Neon.color = e.target.value;
})

/*Função que muda o tamanho*/
sizeInput.addEventListener('change',(e)=>{
    const sizes = [30, 60, 100, 125, 150, 175, 200];
    const value = parseInt(e.target.value);
    const closestSize = sizes.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    
    if(closestSize == 125 || closestSize == 150){
        document.documentElement.style.setProperty('--neon-size', (closestSize * 0.85) + 'px');
    }else if(closestSize == 175 || closestSize == 200){
        document.documentElement.style.setProperty('--neon-size', (closestSize * 0.75) + 'px');
    }
    else{
        document.documentElement.style.setProperty('--neon-size', closestSize + 'px');
    }
    
    tamanhoText.innerHTML = closestSize + 'CM';
    data_Neon.size = closestSize; // Atualiza o tamanho no objeto data_Neon
    gerarPreco(); // Chama a função para gerar o preço
})

/*Função que muda as linhas do texto */
linesInput.addEventListener('change',(e)=>{
    data_Neon.lines = parseInt(e.target.value);
    gerarPreco();
})

/*Função que muda o material*/
selectInput.addEventListener('change',(e)=>{
    data_Neon.material = e.target.value;
    gerarPreco();
})
gerarPreco();
/*Função que muda o fundo da tela*/

/* Função do tamanho */
