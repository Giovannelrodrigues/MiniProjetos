
function convert() {
    let binario;
    let result = 0;
    let decimal = 0;
    binario = document.querySelector("#binary").value;
    binario = binario.split('')
    binario = binario.map(item => Number(item))
    if(binario.find(item => item > 1 )){
        alert("please, insert a binary number")
    }else{
        for(let contador = 0; contador < binario.length; contador ++){
            result = binario[contador] * 2 **(binario.length - (contador + 1))
            decimal = decimal + result
        }

        let inserir = document.querySelector("#result").value = decimal
        
    }

}