/*
Modifica el ejemplo anterior de forma que muestre en mi página web en
una lista, los datos del JSON recibidos. Deberá aparecer lo siguiente

const button = document.getElementById('button');

button.addEventListener('click',()=> {

    let xhr;

    //INSTANCIA DE CLASE PARA QUE FUNCIONE EN TODOS LOS NAVEGADORES
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest ()
    else xhr = new ActiveXObject ('Microsoft.XMLHTTP');

    /* El primer parámetro de la llamada a open() es el método HTTP request – GET, POST, HEAD
    El segundo parámetro es el URL de la página que se esta pidiendo. 

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

*/

/*
1.Crea la base de datos que se proporciona en el archivo marvel.sql
2.Interpreta el código marvel.php y colócalo en el servidor y utilízalo cuando creas conveniente.
3.Crea una página html que muestre 

Yo con mi js llamo a mi php mediante una petición AJAX
Con mi js abro una petición AJAX que me conecta con mi servidor(php). Mi página php está ubicada en mi servidor.
Lo que me interesa de mi servidor es mi página marvel.php que se conecta a mi base de datos
Una vez ahí mi php ubicado en el servidor hace mi consulta a mi bbdd
*/

const formulario = document.getElementById('form');
const tabla = document.getElementById('tabla');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    let xhr;

    //INSTANCIA DE CLASE PARA QUE FUNCIONE EN TODOS LOS NAVEGADORES
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest ()
    else xhr = new ActiveXObject ('Microsoft.XMLHTTP');

    /* El primer parámetro de la llamada a open() es el método HTTP request – GET, POST, HEAD
    En el segundo parámetro accedemos a la página marvel.php */
 
       
            /*Accedo a mi php y éste hace la consulta a mi bbdd. entraremos en mi if con id vacío,
            así que incluiremos todos los datos obtenidos en una tabla*/
            xhr.open ('GET', 'marvel.php');
            /*Cargamos los datos en mi json y lo dibujamos*/
                xhr.addEventListener('load',(data) => {
                    //let listaSuperheroe = JSON.parse(data.target.response);
                    console.log(data.target.response);
                       /* for (let nombres of listaSuperheroe ){
                            console.log(nombres);
                        }*/
                    });
            

    
xhr.send();

});


