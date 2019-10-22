let array = ['Sevilla', 'Cadiz', 'Huelva', 'Malaga', 'Almeria', 'Jaen', 'Cordoba'];
//mostramos array
document.writeln(array);

//ordenamos array y guardamos en variable
let arrayOrden = array.sort();
console.log(arrayOrden);


//creamos tabla y mostramos contenido de variable que alberga la lista ordenada
function mostrar(){
	
let miTabla = "<table border='1'>";
miTabla += "<tr><td>" + arrayOrden[0] + "</td><tr>";
miTabla += "<tr><td>" + arrayOrden[1] + "</td><tr>";
miTabla += "<tr><td>" + arrayOrden[2] + "</td><tr>";
miTabla += "<tr><td>" + arrayOrden[3] + "</td><tr>";
miTabla += "<tr><td>" + arrayOrden[4] + "</td><tr>";
miTabla += "<tr><td>" + arrayOrden[5] + "</td><tr>";
miTabla += "<tr><td>" + arrayOrden[6] + "</td><tr>";
miTabla += "</table>";                                                                                                                                                                                       

//mostramos en html
document.writeln(miTabla);

}