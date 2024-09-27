function gerarPreco(){
    console.log(data_Neon)   

    let size = data_Neon.size;
    let lines = data_Neon.lines;
    let length = data_Neon.length;
    let font = data_Neon.font;
    let material = data_Neon.material;
    
    let valor = 0;
    if(material == 'Neon Led'){
        let outerLogic = [100,125,150,175,200];
        if(outerLogic.includes(size)){
            let vec = data.Neon_Led.size[size].lines[lines]
            if(lines == 1){
                if(font == 'Roboto'){
                    if(length <= vec.tr.max_caracteres){
                        valor = vec.tr.value;
                        
                    }else{
                        error('Tamanho do texto excedido')
                    }
                }else if(length <= 10){
                    let min = data.Neon_Led.size[size].lines[lines].min;
                    valor = min.value;
                }else if(length >= 11 && length <= 20){
                    let max = data.Neon_Led.size[size].lines[lines].max;
                    valor = max.value;
                }else{
                    error('Tamanho do texto excedido')
                }
            }else if(lines == 2){
                if(length <= 20){
                    let min = data.Neon_Led.size[size].lines[lines].min;
                    valor = min.value;
                }else if(length >= 21 && length <= 40){
                    let max = data.Neon_Led.size[size].lines[lines].max;
                    valor = max.value;
                }
                
            }
           
        }else{
            let vec = data.Neon_Led.size[size].lines[lines]
            if(length <= vec.max_caracteres){
                valor = vec.value;
            }else{
                error('Tamanho do texto excedido')
            }
        }

      attPreco(valor);
    }
}

function error(err){
    console.log(err)
    document.getElementById('preco-final').innerHTML = err;

}

function attPreco(valor){
    console.log(valor)
    if(valor != 0){
        document.getElementById('preco-final').innerHTML = 'R$ ' + valor;
    }
}