console.log("For");
/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las
palabras.*/
var componentes = ["cpu", "gpu", "ram", "ssd", "motherboard"];
console.log("a)")
for (var i = 0; i < componentes.length; i++) {
    alert(componentes[i]);
    console.log(componentes[i])
}

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.*/
console.log("b)")
for (var i = 0; i < componentes.length; i++) {
    alert(componentes[i].substring(0, 1).toUpperCase() + componentes[i].substring(1, componentes[i].length));
    console.log(componentes[i].substring(0, 1).toUpperCase() + componentes[i].substring(1, componentes[i].length))
}

/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
la variable sentence. Al final mostrar una única alerta con la cadena completa.*/
var sentence = "";
for (var i = 0; i < componentes.length; i++) {
    sentence += componentes[i] + " ";
}
alert(sentence);
console.log("c) " + sentence);

/*Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al número
9. Mostrar por la consola del navegador el array final (utilizar console.log).*/
var array = [];
for (var i = 0; i < 10; i++) {
    array.push(i);
}
console.log("d) " + array);
console.log(array);
console.log("------------------");