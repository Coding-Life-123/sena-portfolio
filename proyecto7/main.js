let operador = '';

function asignar(OP){
    operador = OP;
}

function desarrollar(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let htmlResultado = document.getElementById('resultado');
    let resultado;
    console.log(num1, num2, operador);

    switch(operador){
        case 'suma':
            resultado = num1 + num2;
            htmlResultado.textContent = resultado
            break;
        case 'resta':
            resultado = num1 - num2;
            htmlResultado.textContent = resultado
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            htmlResultado.textContent = resultado
            break;
        case 'dividir':
            if(num1 == 0 || num2 == 0){
                console.log("error, no se puede dividir por 0");
                htmlResultado.textContent = 'Error, no se permite dividir por 0';
            }else{
                resultado = num1 / num2;
                htmlResultado.textContent = resultado
            }
            break;
    }
    console.log(resultado);
}
