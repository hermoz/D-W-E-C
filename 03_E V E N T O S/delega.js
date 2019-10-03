window.moveBy(20,30);

const galeria = document.getElementById("gallery");
const item = document.getElementById("gallery");

/* recordamos: EN ESTE EVENTO DEL EJERCICIO ANTERIOR CLASE.CLASSLIST
box.addEventListener('mouseenter',()=> {
	box.classList.replace('red','green');
*/

/*
*/
/* CON ESTE CÓDIGO NOS APARECE POR CONSOLA EL ITEM EXACTO CLICKEADO
galeria.addEventListener('click',(e)=> {
    console.log(e.target.textContent);
});
*/

//classList es para interactuar con las clases que tengo en mi css

//CON ESTE CÓDIGO CAMBIAMOS EL COLOR DE CADA ITEM DE LA GALLERY
//Con add permanece rojo y con toggle cuando volvemos a pulsar se quita
//CUANDO SE HACE CLICK SE GENERA EL EVENTO (E), Y ABAJO A ESE ELEMENTO LUEGO LE APLICO EL TARGET
galeria.addEventListener('click', (e) => {
	e.target.classList.toggle('red');
	console.log(e.target.textContent);
});

/*
boton.addEventListener('click',()=> {
	texto.addEventListener('keyup',(event)=> {
	console.log(event.key);
	});
});
*/

 