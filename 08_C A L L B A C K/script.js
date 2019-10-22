/* EJEMPLO CALLBACK CLASE
en get user declaramos la funcion, que guarda el id y una funcion de callback
y dentro crea un objeto

 const getUser = (id, cb) => {
    const user = {
        name: 'Dorian',
        id: id
    }
    if (id == 2) cb('User not exist')
    en el caso de que exista como no hay error le paso null
    ese user es el objeto que se crea dentro arriba y ahi se lo paso
    else cb(null, user)
}

esta es la funcion de call back que recibe un error y un usuario
usa un error que le esta llegando nulo
getUser(1, (err, user) => {
    if (err) return console.log(err)
    console.log(`User name is ${user.name}`);
}) 

*/
/*
const usu3 = {
    id: 1,
    name: 'Ja'
}
const usu2 = {
    id: 2,
    name: 'je'
}
const usu1= {
    id: 3,
    name: 'Ji'
}

let arr_objetos = [usu1, usu2, usu3];

let id_usuario = parseInt(prompt('introduce un id'));

let usuario_deseado = arr_objetos.find(usuario => usuario.id == id_usuario);



const solicita_usuario = (id, callback) => {
    if (typeof usuario_deseado == 'undefined') {
        callback('El usuario con el id: ' + id + ' no existe.');
    } else {
        callback(null, usuario_deseado);
    }
};



solicita_usuario(id_usuario, (err, usuario_deseado) => {
    if (err) {
        return console.error(err);
    } else {
        console.log(usuario_deseado.name);
    }
});
*/

/*Crea un array de objetos usuario. Cada objeto usuario tiene su id y su nombre. El array contendrá al menos 3 usuarios. 
Con esto vamos a simular que tenemos una base de datos de usuarios.
*/

const usuario = [{ id: 1, name:'Persona 1'},{id: 2, name:'Persona 2'},{id: 3, name:'Persona 3'},{id: 4, name:'Persona 4'}];

/* Crea una función que solicite el usuario y recibirá por parámetro el id y una función de callback.
Localizará al usuario sin necesidad de hacer ningún bucle y pintará por pantalla el nombre del usuario. 
- Si el usuario no existe se ejecutará el callback indicando que “Not exist a user with id XXX”. 
- Si existe se ejecutará el callback sin error y devolvemos el usuario.
*/

const solicitaUsuario = (id, cb) => {
    //Creamos constante y guardamos en ella la búsqueda del array
    //recorremos el array sin necesidad de hacer un bucle, recorre cada objeto y busca el objeto.id
    const usuario = usuario.find(usuario=> usuario.id == id)
    if (!usuario) {
        cb ("Not exist a user with id ${id}");
    } else cb (null, usuario);    
}

solicitaUsuario(idUsuario,(err,usuario)=>{
    if (err) return console.log (err)
    console.log(`User name is ${usuario.name}`);
});

/*
RECORDAMOS FUNCION FIND
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
*/

/*
const getUser=(idab,cb) =>{
    let usuario =  arrayusuarios.findIndex(x=>x.id==idab);
    if (usuario > -1){
        cb(null,arrayusuarios[usuario]);
    } else {
        cb ();
    }
}
//CONSOLE.ERROR!!!! LO MARCA EN ROJO EN LA CONSOLA
*/