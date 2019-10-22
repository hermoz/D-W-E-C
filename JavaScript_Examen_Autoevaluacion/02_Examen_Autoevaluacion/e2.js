//Contamos numero de rows en la tabla
let total = document.getElementById("tablaEm").rows.length;
document.getElementById("totalEmp").innerHTML = total;

/*Insertar nuevos empleados en la tabla. 
En el caso de insertar un nuevo empleado deberá actualizarse el número total de empleados.
En el caso de ya existir el empleado deberá mostrarse una alerta indicando que ya existe. 
El DNI será el identificador del empleado.
*/
function insertar(){
    let dniArray = ["77332344K","23445677J","12345678H"];

    //solicitamos datos del empleado, preguntamos en primer lugar dni para ver si existe o no en el array creado

    let dniEmpleado = prompt("Introduzca DNI del empleado"); 

        if (dniArray.indexOf(dniEmpleado) == -1) {
            
        dniArray.push(dniEmpleado);
        let nombreEmpleado = prompt("Introduzca nombre del empleado");
        let apellidosEmpleado = prompt ("Introduzca los apellidos del empleado: "); 

        //Insertamos los datos solicitados en una nueva row
        // Create an empty <tr> element and add it to the last position of the table:
        let row = table.insertRow();

        // Insert new cells (<td> elements) at the 1st, 2nd, 3rd, 4th position of the "new" <tr> element:
        //QUÉ ES MEJOR, ¿INSERTAR CELDAS O CREAR ELEMENTOS A MANO?
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        // Append a text node to the cell. Agregamos columnas a la fila
        cell2.appendChild(dniEmpleado);
        cell3.appendChild(nombreEmpleado);
        cell4.appendChild(apellidosEmpleado);

        } else {
            alert("El dni introducido ya existe");
        }
           
}

/*
Borrar un empleado de la tabla.
Para borrar un empleado deberá introducirse el DNI del empleado que se desea borrar. 
En el caso de borrar un empleado deberá actualizarse el número total de empleados.
En el caso de que no exista el empleado deberá mostrarse una alerta.
*/
function borrar(){
    //solicitamos dni del empleado a borrar
    let dniEmpleado = prompt("Introduzca DNI del empleado que desea borrar: ");

    //si el dni existe
    if (dniArray.indexOf(dniEmpleado) > -1) {

        let miTabla = document.getElementById("DatePreferred").firstChild;
        let rowCount = miTabla.rows.length;

        for(var i=0; i<rowCount; i++) {
            let row = miTabla.rows[i];
            let text = row.cells[0].innerText;
            if(text.indexOf(dniEmpleado)!=-1){
              miTabla.deleteRow(i);
            }
        }

    } else {
        alert("El dni introducido no existe");
    }
          
}


/*
Modificar un empleado de la tabla. 
En el caso de que no exista, deberá mostrar una alerta indicando que el empleado a modificar no existe.
*/

function modificar(){

    
}