console.log("Strings");
/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/
var string = "ErnestoMoretti";
var mayuscula = string.toUpperCase();
console.log("a) " + mayuscula);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/
var string = "ErnestoMoretti";
var subString = string.substring(0, 5);
console.log("b) " + subString);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/
var string = "ErnestoMoretti";
var subString = string.substring(11, 14);
console.log("c) " + subString);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/
var string = "ErnestoMoretti";
var subString = string.substring(0, 1).toUpperCase() + string.substring(1, 16).toLowerCase();
console.log("d) " + subString);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/
var string = "Ernesto Moretti";
var espacio = string.indexOf(" ");
console.log("e) " + espacio);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +)*/
var string = "ernesto moretti";
var espacio = string.indexOf(" ");
var subString = string.substring(0, 1).toUpperCase() + string.substring(1, espacio).toLowerCase() + " " + string.substring(espacio + 1, espacio + 2).toUpperCase() + string.substring(espacio + 2, 16).toLowerCase();
console.log("f) " + subString);
console.log("------------------");