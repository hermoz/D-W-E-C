//declaramos funcion añadir de la lista
function anade() {
  let miLista = document.getElementById("lista");

  //Creamos una nueva fila
  let nuevaFila = document.createElement("li");

  //Obtenemos texto y posicion del formulario. Creo el nodo de texto
  let texto = document.createTextNode(document.getElementById("newFood").value);

  let pos=parseInt(document.getElementById("position").value);

  //Agregamos texto obtenido a la fila creada
  nuevaFila.appendChild(texto);

  //Ubicamos para la funcion posterior de inserción la vieja fila realizando posición solicitada - 1
  viejaFila=miLista.getElementsByTagName("li")[pos-1];

  //Agregamos fila a la lista en posicion indicada
  miLista.insertBefore(nuevaFila,viejaFila);

}


function borraIndice (){
    let list = document.getElementById("lista");
  
    let pos = parseInt(document.getElementById("position").value);

    let borrar = document.getElementsByTagName("li") [pos-1]; 
    list.removeChild(borrar);

}





    


