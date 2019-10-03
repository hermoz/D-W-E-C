/*
Crea una página que muestre por pantalla un cronómetro y la fecha actual. El formato que deberá aparecer es lo siguiente:
Hoy	es	30	- 9	- 2019	y	son	las	21:4:23	horas
*/

// obteneos la fecha actual
//let fecha = new Date();
let d = new Date();
let dia = d.getDate();
let mes = d.getMonth()+1;
let ano = d.getFullYear();
let hora = d.getHours();
let minuto = d.getMinutes();
let segundos = d.getSeconds();

let horaActual = setInterval(tiempo, 1000);

function tiempo() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("fechaActual").innerHTML = "Hoy es " + dia + "-" + mes + "-" + ano + " y son las " + t;
}



