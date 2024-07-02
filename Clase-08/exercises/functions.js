console.log("Funciones");
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.*/
function suma(num1, num2) {
    return num1 + num2;
}
var resultado = suma(5, 10);
console.log("a) La suma es: " + resultado);

/*A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.*/
function suma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    return num1 + num2;
}
var resultado = suma(5, "10");
console.log("b) La suma con un parámetro que no es un número es: " + resultado);
resultado = suma(5, 10);
console.log("Si fuera un número, la suma sería: " + resultado);

/*Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/
function validateInteger(num) {
    if (num % 1 === 0) {
        return true;
    }
    return false;
}
console.log("c) " + validateInteger(5));

/*A la función suma del ejercicio b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).*/
function suma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Uno de los parámetros no es un número");
        return Math.round(num1) + Math.round(num2);    
    }
    return num1 + num2;
}
var resultado = suma(5.5, 10);
console.log("d) La suma es: " + resultado);

/*Convertir la validación del ejercicio d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/
function validateInteger(num) {
    if (num % 1 === 0) {
        return true;
    }
    return false;
}
function suma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    if (!validateInteger(num1) || !validateInteger(num2)) {
        alert("Uno de los parámetros no es un número entero");
        return Math.round(num1) + Math.round(num2);
    }
    return num1 + num2;
}
var resultado = suma(5.5, 10);
console.log("e) La suma es: " + resultado);
console.log("------------------");