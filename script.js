//Almacena la ruta del servidor remoto en donde se encuentra el recurso.
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

const request = new XMLHttpRequest();//Crea un objeto XMLHttpRequest.

//Abre el recurso pasando el parámetro 'Get' y la URL.
request.open('GET', requestURL);

//Indica el tipo de respuesta que esperamos.
request.responseType = 'json';
request.send();//Envia la peticion.

import datosEscuadron from "./escuadron.js";//Importa la funcion para mostrar los datos.
import mostrarHeroes from "./mostrarHeroes.js";

//Una vez que se cargue la respuesta, podemos utilizar los datos.
request.onload = function() {
    const heroes = request.response;
    datosEscuadron(heroes);//Envía como parámetros los datos para mostrarlos.
    mostrarHeroes(heroes);
}