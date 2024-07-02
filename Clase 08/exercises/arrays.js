console.log("Arrays");
/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log("a)");
console.log("Mes 5: " + meses[4]);
console.log("Mes 11: " + meses[10]);

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log("b) " + meses.sort());
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
meses.unshift("Principio");
meses.push("Final");
console.log("c) " + meses);

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
meses.shift();
meses.pop();
console.log("d) " + meses);

/*Invertir el orden del array (utilizar reverse).*/
console.log("e) " + meses.reverse());

/*Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).*/
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var string = meses.join("-");
console.log("f) " + string);

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).*/
var mesesCopia = meses.slice(4, 11);
console.log("g) " + mesesCopia);
console.log("------------------");