
var nombre= prompt("Ingresa tu nombre");

/* alert("Bienvenid@ " + nombre ); */

/* alert("Bienvenid@ " + nombre.toLocaleLowerCase() ); */

var nombre= nombre.toLocaleLowerCase();
/* = asignar valor == exacto */
if (nombre=="camila") {
    document.write("Bienvenida " + nombre);
    
} else {
    document.write("Quien eres? ");
    
}


