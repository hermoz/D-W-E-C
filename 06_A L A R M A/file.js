// obteneos la fecha actual
//let fecha = new Date();
let d;
let hora;
let minuto;
let segundos;  

//Usamos setInterval para determinar la función que se ejecutará cada segundo
let horaActual = setInterval(tiempo, 1000);

function tiempo() {
  d = new Date();
  hora = d.getHours();
  minuto = d.getMinutes();
  segundos = d.getSeconds(); 

  document.getElementById("fechaActual").innerHTML = "Son las " + hora + ":"+ minuto + ":" + segundos;
}

/*
//Iniciamos programa al pulsar el botón de INICIAR
let boton = document.getElementById("button");
//La alarma cuando comienza cuando se pulse click en el boton "iniciar"
button.addEventListener('click',()=> {
  iniciar();
	console.log("Su alarma ha sido activada");
  });
*/


//Activamos alarma y vamos comprobando valores insertados con hora actual cada segundo
//Obtenemos de input hora y minuto para igualarlos a los elementos de la fecha actual
let init = setInterval(iniciar, 1000);

function iniciar(){
  let hour = document.getElementById("hour").value;
  let minute = document.getElementById("minute").value;
  if (hora==hour && minuto==minute && segundos==0){
    saltaAlarma();
  } 
}

//Cuando salta alarma preguntar si descansar un poco mas (dos opciones)

function saltaAlarma () {

let confirma = confirm("¡ ¡ ¡ A  L  A  R  M  A ! ! ! ¿ Desea 2 minutos más de sueño ?");
  if (confirma == true) {
    alert("Has decidido aplazar. Volverá a sonar dentro de 2 minutos!");
    //si postponemos aplazamos alarma 2 minutos
    setTimeout(() => {   
    }, 120000);  
  } else {
    alert("Alarma cancelada. A trabajar!"); //(aparece en el mensaje debajo una vez se ha cancelado)
  }

}

