/*
Al pulsar el botón aplicar, se añadirá una nueva fila en la posición indicada en la
caja de texto con el nombre del equipo nuevo y los puntos que tiene.
*/


const boton=document.getElementById("boton");

boton.addEventListener('click',()=>{

    //OBTENEMOS LOS VALORES UNA VEZ PULSAMOS (SI SACAMOS ESTAS CONSTANTES FUERA DEL EVENTO NO OBTIENE LOS VALORES)
    const mitabla=document.getElementById("tabla");
    //obtenemos valores obtenidos de los input mediante.value
    const pos=document.getElementById("posicion").value;
    const equip=document.getElementById("equipo").value;
    const punt=document.getElementById("puntos").value;

    /* 1. CREAMOS EL ELEMENTO */
    //creamos elementos correspondientes a fila y sus 3 respectivas columnas
    //AQUI SÓLO CREAMOS, LUEGO TENEMOS QUE AÑADIR CON APPEND
    nuevaFila=document.createElement("tr");

    nuevaCol1=document.createElement("td");
    nuevaCol2=document.createElement("td");
    nuevaCol3=document.createElement("td");

    /* 2. CREAMOS EL NODO DE TEXTO CON LOS VALORES OBTENIDOS DEL FORMULARIO*/
    textoPosicion=document.createTextNode(pos);
    textoEquipo=document.createTextNode(equip);
    textoPuntos=document.createTextNode(punt);

    /* 3. AGREGAMOS EL NODO TEXTO A LA COLUMNA CREADA*/
    nuevaCol1.appendChild(textoPosicion);
	nuevaCol2.appendChild(textoEquipo);
	nuevaCol3.appendChild(textoPuntos);


    /* 3.AGREGAMOS COLUMAS A ROW CREADA*/
    nuevaFila.appendChild(nuevaCol1);
	nuevaFila.appendChild(nuevaCol2);
    nuevaFila.appendChild(nuevaCol3);
    
    /*4.AGREGAMOS LA ROW A LA TABLA
    mitabla.appendChild(nuevaFila);*/
    
    //Reemplazar viejo nodo por el nuevo
	console.log(pos);
	viejaFila=mitabla.getElementsByTagName('tr')[pos];
	console.log(viejaFila);
	viejaFila.parentNode.replaceChild(nuevaFila,viejaFila);
});

