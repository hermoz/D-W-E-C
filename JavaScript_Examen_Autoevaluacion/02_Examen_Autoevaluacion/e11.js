/*
- Solicitará 5 nombres mediante cuadros de diálogo que deberán ir apareciendo
de uno en u
- Deberá controlarse que no se pueden introducir
en el array nombres repetidos. Si el nombre ya existe en el array deberá mostrarse una
alerta indicando que ya existe y que debe introducir otro nombre. 
- Mostrarse por consola la primera letra en mayúscula de cada uno
de los nombres introducidos en el array ordenadas por orden alfabético.
*/
function inicializar() {
	//inicializamos el array vacio
	let nombres = [];
    let lista = [];
    //Solicitamos nombres mediante cuadro diálogo y guardamos en array
    
    while (nombres.length < 5){
            let nombre = prompt("Escriba nombre completo:");
            //debo comprobar que el nombre no exista en el array

                if (nombres.indexOf(nombre) > -1) {
                    alert("El nombre introducido ya existe. Intente de nuevo con otro:");
                } else {
                    nombres.push(nombre);
                }             
            
    }

    lista=nombres.sort();


    for (let i=0;i<lista.length;i++){
        document.write(lista[i].charAt(0).toUpperCase());
        //console.log(nomMod);      
    }

    

/*
    for (let i=0;i<lista.length;i++){
        console.log(lista[i].charAt(0).toUpperCase());

    }
*/

}
































    //document.write(lista);

 /*   
    //aplicamos método FOR OF
    for (let nombre of nombres){
        let nomModificado=nombre.charAt(0).toUpperCase() + nombre.slice(1);
        //nombres.push(nomModificado);
        console.log(nomModificado);
    }











   for (let nom of lista){
        let nomMod=nom.charAt(0).toUpperCase() + nom.slice(1);
        console.log(nomMod);    
    }

    console.log(lista);



*/

 




/*
    nombres.forEach(capitalLetter(nombre));

    let nombreOrdenado=nombres.sort();
    document.write(nombreOrdenado);

    function capitalLetter(nombres){
        let nombremodificado=nombre.charAt(0).toUpperCase() + nombre.slice(1);
        nombres.push(nombremodificado);
    }
*/


