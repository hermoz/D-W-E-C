/*EJERCICIO1*/

const box = document.getElementById("box");

//Cuando el ratón entre dentro de la caja, se cambiará el color a verde
box.addEventListener('mouseenter',()=> {
	box.classList.replace('red','green');
})

//Cuando el ratón salga de la caja el color deberá cambiar a rojo
box.addEventListener('mouseleave',()=> {
	box.classList.replace('green','red');
})

/*Cuando pulsemos el botón izquierdo del ratón estando situados sobre la caja, 
aparecerá por consola el mensaje.*/
box.addEventListener('mousedown',()=> {
	console.log('has pulsado la caja');
})


/*Al soltar el botón izquierdo del ratón en la caja, 
aparecerá por consola el mensaje.*/
box.addEventListener('mouseup',()=> {
	console.log('Has soltado la caja');
})


/* EJERCICIO 2 */
/* Añade un input de tipo texto.
- Al pulsar una tecla deberá aparecer el mensaje por consola “Has pulsado”
- Al soltar la tecla deberá aparecer el mensaje por consola “Has soltado” */
/*  T E O R I A
Get the keyboard button that was pressed when a key event occured
var x = event.key;
*/
input.addEventListener('keydown',(event)=> {
	console.log("Has pulsado la tecla: " + event.key);
	});

	input.addEventListener('keyup',()=> {
	console.log("has soltado una tecla");
	});



/*EJERCICIO 3*/
/*Crea un formulario con un input de tipo texto y un botón “Enviar”. Al pulsar el botón:
 evento para que al soltar una tecla se lance una función que vaya
mostrando por consola todo lo que se escribe en el input*/

const texto = document.getElementById("text");
const boton = document.getElementById("button");

boton.addEventListener('click',()=> {
	texto.addEventListener('keyup',(event)=> {
	console.log(event.key);
	});

});