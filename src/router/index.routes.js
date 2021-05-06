import {pages} from '../controllers/index'

let content = document.getElementById('root');

//Para poner el home por defecto al entrar a la pagina
content.appendChild(pages.home());
const router = (route) => {
    //Para limpiar el contenido cada vez que cambia
    content.innerHTML = '';
    switch(route) {
        case '#/':
            return content.appendChild(pages.home());
        case '#/posts':
            return content.appendChild(pages.posts());
        case '#/products':
            return console.log("products!")
        default:
            return content.appendChild(pages.notFound());
    }

}

//Exportar para poder utilizar en un import en main js
export {router};