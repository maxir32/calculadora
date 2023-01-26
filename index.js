let Salir = false;

let num1 = null;
let num2 = null;

let opcion = Number(
prompt(
    "Ingrese una operación a realizar :\n" +
      "1 Sumar\n" +
      "2 Restar\n" +
      "3 Multiplicar\n" +
      "4 Dividir\n" +
      "5 Salir\n"
  )
);
if(opcion == 0){
    alert("Se cancelo la operacion");
}
else {
    while(!Salir) {
        if(!opcion){
            alert("Por favor ingrese un numero :");
        }
        else {
            switch (opcion) {
                case 1:
                    num1 = numerouno();
                    num2 = numerodos();

                    resultado = suma(num1,num2);
                    alert("El resultado es: "+resultado);

                    Salir = true;
                    break;
                case 2:
                    num1 = numerouno();
                    num2 = numerodos();

                    resultado = restar(num1,num2);
                    alert("El resultado es: "+resultado);

                    Salir = true;
                    break;
                case 3:
                    num1 = numerouno();
                    num2 = numerodos();

                    resultado = multiplicar(num1,num2);
                    alert("El resultado es: "+resultado);

                    Salir = true;
                    break;
                case 4:
                    num1 = numerouno();
                    num2 = numerodos();
                    
                    if(num2==0){
                        alert("No se puede dividir entre cero");
                    }else{
                           resultado = dividir(num1,num2);
                           alert("El resultado es: "+resultado);                   
                           Salir = true;
                        }
                    break;
                case 5:
                    Salir = true;
                    alert("Muchas gracias! Nos vemos pronto!!!");
                    break;
                default:
                    defaultValue = true;
                    alert("Ingrese una opcion correcta : Solo numeros entre 1 y 5");
            }
            if(opcion==4 && num2==0){
                alert("Intente nuevamente gracias")
            }
            else{
                    alert("Muchas gracias! Nos vemos pronto!!!");
                }
        }
    }
}

function numerouno() {
    let num1 = Number(prompt("Ingresa el primer numero :"));
    return num1;
}

function numerodos() {
    let num2 = Number(prompt("Ingresa el segundo numero :"));
    return num2;
}

function suma(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}
