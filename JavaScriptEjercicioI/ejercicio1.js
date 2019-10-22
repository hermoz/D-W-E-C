function addRow(){
	miTabla=document.getElementById('tabla');

	//Creamos nueva fila
	nuevaFila=document.createElement('tr');

	//Creamos 3 nuevas columnas
	nuevaCol1=document.createElement('td');
	nuevaCol2=document.createElement('td');
	nuevaCol3=document.createElement('td');

	//Obtenemos texto del formulario
	nPosicion=document.getElementById('idPosicion').value;
	nEquipo=document.getElementById('idEquipo').value;
	nPuntos=document.getElementById('idPuntos').value;

	//Creamos nodo de texto
	texto1=document.createTextNode(nPosicion);
	texto2=document.createTextNode(nEquipo);
	texto3=document.createTextNode(nPuntos);

	//Agregamos texto obtenido a la nueva columna creada	
	nuevaCol1.appendChild(texto1);
	nuevaCol2.appendChild(texto2);
	nuevaCol3.appendChild(texto3);

	//Agregamos columnas a la fila
	nuevaFila.appendChild(nuevaCol1);
	nuevaFila.appendChild(nuevaCol2);
	nuevaFila.appendChild(nuevaCol3);


	//Reemplazar viejo nodo por el nuevo
	console.log(nPosicion);
	viejaFila=miTabla.getElementsByTagName('tr')[nPosicion];
	console.log(viejaFila);
	viejaFila.parentNode.replaceChild(nuevaFila,viejaFila);
	
}

/*
viejoNodo=miTabla.getElementByTagName('td')[nPos-1];

*/