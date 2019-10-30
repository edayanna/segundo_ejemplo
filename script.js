/* ventana emergente */
/* alert("Hola mundooooooo"); */

/* variable su nombre y su equivalencia */

var variable= "Maria";                      /* String - texto */
var edad=(21);                              /* Number - numeros */
var boleano= true;                          /* Boleano - falso, verdadero */
var objeto={
    nombre: "Pedro",
    edad: 31,                               /* Objet - objetos con caracteristicas */
}              
var frutas= ["Mango", "Durazno", "Melon", "Fresa"]   /* arreglos */     

/* alert(variable + " tiene " + edad); */

document.write(variable + " tiene " + edad);
document.write(frutas[0]);
/* escribir en la cnsola */
console.log(variable);

/* cuantos elementos posee el arreglo */
document.write(frutas.length);

/* agregar un elemento al final del arreglo */
frutas[frutas.length]="Pera";
/* no aparece en el html xq el lenguaje va en cascada, asi que no lo reconoce */
console.log(frutas);

frutas[frutas.length]="Mora";

/* se pueden agregar muchos elementos */
frutas.push("Naranja", "Patilla", "Uva")
document.write(frutas.length);

var frutas2= ["Limon", "Pera", "Papaya", "Mandarina"]; 
var frutas3= ["Lima", "Patilla", "Mamonsillo"]; 

/* unir 2 arreglos - concat */
var ensalada=frutas.concat(frutas2,frutas3);
document.write(ensalada);

/* cambiar los símbolos que separan */
document.write(ensalada.join(" -"));
document.write(ensalada.join("<br>"));

/* ordenar en forma alfabetica */

var ordenar= ensalada.sort();
document.write(ensalada);