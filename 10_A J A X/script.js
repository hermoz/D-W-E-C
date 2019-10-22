/*
Modifica el ejemplo anterior de forma que muestre en mi página web en
una lista, los datos del JSON recibidos. Deberá aparecer lo siguiente
*/
const button = document.getElementById('button');

button.addEventListener('click',()=> {

    let xhr;

    //INSTANCIA DE CLASE PARA QUE FUNCIONE EN TODOS LOS NAVEGADORES
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest ()
    else xhr = new ActiveXObject ('Microsoft.XMLHTTP');

    /* El primer parámetro de la llamada a open() es el método HTTP request – GET, POST, HEAD
    El segundo parámetro es el URL de la página que se esta pidiendo. 
    */
    xhr.open ('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load',(data) => {

    const listaJson = JSON.parse(data.target.response);

    //VAMOS CARGANDO EN LA VARIABLE
    for (let datos of listaJson ){
        console.log(datos);
        //Creamos el nodo
        let li = document.createElement("li");
        //creamos la variable de nodo texto e incluimos los datos leidos
        let dat = document.createTextNode(datos.id + " " + datos.name);
        //añadimos el texto a la etiqueta li
        li.appendChild(dat);
        //añadimos a la lista
        document.getElementById('miLista').appendChild(li);

    }

    console.log(JSON.parse(data.target.response));
})

xhr.send();

})
