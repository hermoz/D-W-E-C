//declaramos funciones y variables
let palosCartas = ['Oros','Bastos','Espadas','Copas'];
let puntosJugador;
let puntosBanca;


//JUGADOR: comenzamos juego solicitando carta cuando pinchamos
const pedircarta = document.getElementById("pedirCartaJugador");
pedircarta.addEventListener('click', () => {

        //Obtenemos los parámetros de la carta obtenida por el jugador mediante random de palos y numeros existentes
        let numero = parseInt((Math.random() * 10) + 1);
        let palo = parseInt(Math.random() * 4);
    
        //concatenamos los parámetros obtenidos y los asociamos al id de la carta para mostrarla en pantalla
        document.getElementById("cartaJugadorObtenida").src='imagenes/' + numero + ''+ palosCartas[palo] + ".jpg";

        //obtenidos numeros e imágenes de cartas vamos sumando valores obtenidos segun criterios de juego
        if (puntosJugador<7.5){
            if(numero <= 7){
                puntosJugador = puntosJugador + numero;
            }else{
                puntosJugador = puntosJugador + 0.5;
            }
        }

        if(puntosJugador>7.5){
            document.getElementById("ganador").innerHTML = "HA GANADO LA BANCA";
        } else {
            juegaLaBanca;
        }  
}

//banca: la banca comienza por defecto cuando el jugador finaliza
function juegaLaBanca (){

         //Obtenemos los parámetros de la carta obtenida por el jugador mediante random de palos y numeros existentes
         let numero = parseInt((Math.random() * 10) + 1);
         let palo = parseInt(Math.random() * 4);
     
         //concatenamos los parámetros obtenidos y los asociamos al id de la carta para mostrarla en pantalla
         document.getElementById("cartaJugadorObtenida").src='imagenes/' + numero + ''+ palosCartas[palo] + ".jpg";
         

         if (puntosBanca<7.5){
            if(numero <= 7){
                puntosBanca= puntosBanca + numero;
            }else{
                puntosBanca = puntosBanca + 0.5;
            }
        }
         //comparamos para que banca no supere a jugador
         if((puntosBank > puntosPlayer) && (puntosBank <= 7.5)){
         if ( (puntosBanca<=7.5) && (puntosBanca<puntosJugador) )
            document.getElementById("ganador").innerHTML = "HA GANADO LA BANCA;
         } else {
            document.getElementById("ganador").innerHTML = "HA GANADO EL JUGADOR";
         }
}


let reiniciarPagina = document.getElementById("reiniciar");

reiniciarPagina .addEventListener("click", () => {
    window.location.reload();
});
