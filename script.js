function calculo(numeroA,numeroB,numeroC){
    let numA=document.getElementById('numeroA').value;
    let numB=document.getElementById('numeroB').value;
    let numC=document.getElementById('numeroC').value;
    let resultado=document.getElementById('resultado');
    if(numA && numB && numC){
    resultado.innerHTML=(numB*numC)/numA
    }else{
        alert('insira os numeros corretamente')
        resetar()
    }
}
function resetar(){
    document.getElementById('numeroA').value=""
    document.getElementById('numeroB').value=""
    document.getElementById('numeroC').value=""
    document.getElementById('resultado').innerHTML="X"
    
}
