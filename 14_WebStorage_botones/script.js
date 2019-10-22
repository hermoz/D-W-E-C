/*
-sessionStorage guarda datos mientras dure la sesión de la página
-localStorage guarda datos (incluso abrir/cerrar navegador)
* setItem()->asigna clave:valor
* getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
• L I M P I A R  los datos utilizaríamos sessionStorage.clear()
• B O R R A R  un elemento utilizaríamos sessionStorage.removeItem(clave de lo que queremos borrar)
*/

const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");

//You can store it easily with localStorage.setItem('storeObj', JSON.stringify(myObj));.
const alta = document.getElementById("alta");
const borrar = document.getElementById("borrar");
const borrarTodo = document.getElementById("borrarTodo");
const borrarUsuario = document.getElementById("borrarUsuario");
const recuperaContrasena = document.getElementById("recuperaContrasena");

//para el alta queremos mantener los datos en local
alta.addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.setItem(usuario.value,contrasena.value);
    alert("Se ha dado de alta con los datos. Usuario:" + usuario.value + ". Contrasena: "+ contrasena.value);
});

//borrar TODOS los datos de local
borrar.addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.clear();
});


borrarUsuario.addEventListener('click',(e)=>{
    e.preventDefault();
    //le pasamos la key para borrar clave/valor
    localStorage.removeItem(usuario.value);
});

recuperaContrasena.addEventListener('click',(e)=>{
    e.preventDefault();
    let password= localStorage.getItem(usuario.value);
    alert("La contraseña para el usuario" + usuario.value + "es: "+ password);
});

var myObj = {
    one: {
        title: 'first',
        id: 1,
        customKey : {
            first: "first",
            second: "second"
        }
    },
    two: {
        title: 'second',
        id: 2
    },
    three: {
        title: 'this is the third',
        id: 3
    }
};

