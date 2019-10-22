/*
Select en el que se carguen los distintos "Aligment" 
radio button con los distintos "Gender" que hay. 
El usuario seleccionará del select un tipo de Aligment y una opción del radio button 
y deberá mostrarse en una tabla los resultados obtenidos con el filtro de búsqueda.
*/
const form = document.getElementById('form'); //no nos hace falta
const tabla = document.getElementById('tabla');
const boton = document.getElementById('boton');

//A L  P U LS A R  B O T O N  S U B M I T
boton.addEventListener('click', (e) =>{
    e.preventDefault();



//OBTENEMOS OBJETO A L I G N M E N T con id indicado (aquí solo elemento, más tarde valor con .value)
const alignmentSelect= document.getElementById('alignmentSelect');

//obtenemos OBJETO I N P U T con id indicado
const generoMasculino = document.getElementById("male");
const generoFemenino = document.getElementById("female");

    //si no hay nada en select cargamos con los valores de aligment existentes de la bd y rellenamos el select
    if(alignmentSelect.value==""){
        //creamos el array
        let alignmentArray = [];
        //accedemos a .php
        fetch("marvel.php")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            //recorremos con for_of y vamos escribiendo las options
            for (elemento of res) {
                /*aquí obtenemos toda la base de datos
                sólo queremos obtener el alignment (ELEMENTO.ALIGNMENT)
                como va recorriendo todos los elementos debemos cuidar que no se repitan por eso indicamos
                que no esté ya en el array
                */
                if (!alignmentArray.includes(elemento.Alignment)) {
                    /*1.creamos elemento option
                    2.creamos nodo de texto
                    3.añadimos nodo a la option
                    4.añadimos la opcion al select
                    5.añadimos al array*/
                    let opcion = document.createElement("option");
                    let textoAlignment = document.createTextNode(elemento.Alignment);
                    opcion.appendChild(textoAlignment);
                    alignmentSelect.appendChild(opcion);
                    alignmentArray.push(elemento.Alignment);
                }
               
            }
        });

    } else {
        //V A L O R  DE  S E L E T  A L I G N M E N T
        const alignmentElegido = alignmentSelect.value;
        console.log(alignmentElegido);

        //C O M P R O B A M O S  V A L O R  DE   G E N E R O
        if (generoMasculino.checked){
            generoElegido = generoMasculino.value;
        } else {
            generoElegido = generoFemenino.value;
        }
        console.log(generoElegido);

        //ACCEDEMOS A PHP CON LOS DATOS OBTENIDOS DE ALIGNMENT Y GENERO
        fetch(`marvel.php?Alignment=${alignmentElegido }&Gender=${generoElegido}`)
            .then(
                res => res.ok
                    ? Promise.resolve(res)
                    : Promise.reject(res)
            )
            .then(res => res.json())
            .then(res => {

                    for (superheroe of res) {
                        let tabla = document.getElementById("tabla");
                        let tr = document.createElement("tr");
                        //columnna1
                        let td = document.createElement("td");
                        let name = document.createTextNode(superheroe.Name);
                        td.appendChild(name);
                        tr.appendChild(td);                   
                        //columnna2
                        let td2 = document.createElement("td");
                        let alignment = document.createTextNode(superheroe.Alignment);
                        td2.appendChild(alignment);
                        tr.appendChild(td2);
                        //columna3
                        let td3 = document.createElement("td");
                        let gender = document.createTextNode(superheroe.Gender);
                        td3.appendChild(gender);
                        tr.appendChild(td3);

                        tabla.appendChild(tr);
                    }
            });
    }

}); 

    

    





   


