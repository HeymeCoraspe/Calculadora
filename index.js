const txtOp1= document.getElementById("operador1");
const txtOpMat= document.getElementById("operadorMat");
const txtOp2= document.getElementById("operador2");
const btnCalcular= document.getElementById("calcular");
const pResultado= document.getElementById("resultado");

//evento para ejecutar la función que se hará cuando el usuario haga click en el botón
btnCalcular.addEventListener("click", calcular); 

function calcular(){
    //console.log(txtOpMat.value); .value accede al campo y muestra en consola lo que hay dentro del campo

    const operacion= txtOpMat.value;
    const num1= parseFloat (txtOp1.value); //parseFloat cambia de texto a numero
    const num2= parseFloat (txtOp2.value);

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(num1) && !isNaN(num2)) //isNan asegura que los peradores sean números
    {
        let resultado;

        switch(operacion){

            case "+":
                resultado= num1+num2
                break;

            case "-":
                resultado= num1-num2
                break;

            case "*":
                resultado= num1*num2
                break;

            case "/":
                resultado= num1/num2
                break;
        }

        pResultado.style="color:black";
        pResultado.innerText= "= " + resultado; //llamando al resultado para que se muestre en pantalla
    
    } else{
        pResultado.style="color:red"; //modificar el color
        pResultado.innerText="Valores inválidos";
    }
}

