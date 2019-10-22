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

const seleccion = document.getElementById('select')
//CUANDO ABRIMOS EL ARCHIVO, AL DARLE A SUBMIT, 
//Indicamos ASI QUE POR DEFECTO EL ID SEA CERO (así entra en nuestro php con id=0 y muestra todos los datos)
let idSeleccionado=0;

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    idSeleccionado=select.value;
    let xhr;
    console.log(idSeleccionado);
   
            //INSTANCIA DE CLASE PARA QUE FUNCIONE EN TODOS LOS NAVEGADORES
            if (window.XMLHttpRequest) xhr = new XMLHttpRequest ()
            else xhr = new ActiveXObject ('Microsoft.XMLHTTP');

            /* El primer parámetro de la llamada a open() es el método HTTP request – GET, POST, HEAD
            En el segundo parámetro accedemos a la página marvel.php */
            
                /*Accedo a mi php y éste hace la consulta a mi bbdd. Entraremos en mi if con id vacío,
                así que incluiremos todos los datos obtenidos en una tabla*/

         if(idSeleccionado==0){
                xhr.open ('GET', 'marvel.php');

                /*Cargamos los datos en mi json y lo dibujamos*/
                    xhr.addEventListener('load',(data) => {

                        /*
                        A common use of JSON is to exchange data to/from a web server.
                        When receiving data from a web server, the data is always a string.
                        Parse the data with JSON.parse(), and the data becomes a JavaScript object. */
                        let listaSuperheroe = JSON.parse(data.target.response);
                        console.log(listaSuperheroe);
                        /*obtengo esto:
                        0: {ID: "1", Name: "Spider Man", Alignment: "Good", Gender: "Male", Hometown: "USA", …}
                        1: {ID: "2", Name: "Iron Man", Alignment: "Neutral", Gender: "Male", Hometown: "USA", …}
                        */
                            for (let heroe of listaSuperheroe ){
                                //console.log(listaSuperheroe);
                                    
                                    //creamos el elemento option!!!!!!!!!!!!!!!!!!!!!!!!
                                    let option = document.createElement("option");
                                    //le añadimos el atributo del ID PARA ASIGNAR EL VALUE=" " A LA OPTION DEL SELECT (RECORDAMOS FORMATO DE ESA ETIQUETA)
                                    option.setAttribute('value',heroe.ID);
                                    //creamos el NODO DE TEXTO
                                    let texto = document.createTextNode(heroe.ID + " " + heroe.Name);

                                    //AÑADIMOS EL NODO DE TEXTO A LA OPTION
                                    option.appendChild(texto);
                                    //AÑADIMOS LA OPTION AL SELECT
                                    select.appendChild(option);                       
                            }
                          
                        });              
                xhr.send();

        } else{
               
                console.log(idSeleccionado);
                //E N T R A M O S 
                //EN N U E S T R O .PHP 
                //CON E L "ID S E L E C C I O N A D O"

                xhr.open ('GET', `marvel.php?id=${idSeleccionado}`);
                        /*Cargamos los datos en mi json y lo dibujamos*/
                        xhr.addEventListener('load',(data) => {
                            let listaSuperheroe = JSON.parse(data.target.response);

                            //console.log(data.target.response);
                                for (let heroe of listaSuperheroe ){
                                    console.log(heroe);
                                    //obtenemos la tabla
                                    let tabla = document.getElementById("tabla");
                                    //creamos fila y columna donde vamos a escribir los datos del superheroe obtenido
                                    let tr = document.createElement("tr");
                                    let td1 =  document.createElement("td");
                                    let id = document.createTextNode(heroe.Name);
                                    td1.appendChild(id);
                                    tr.appendChild(td1);

                                    //añadimos la row a la tabla
                                    tabla.appendChild(tr);

                                    let td2 =  document.createElement("td");
                                    let genero = document.createTextNode(heroe.Gender);
                                    td2.appendChild(genero);
                                    tr.appendChild(td2);

                                    let td3 =  document.createElement("td");
                                    let skills = document.createTextNode(heroe.Fighting_Skills);
                                    td3.appendChild(skills);
                                    tr.appendChild(td3);               
                                }
                            });              
                xhr.send();
        }

});








