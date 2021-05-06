import {pages} from '../controllers/index'

let content = document.getElementById('root');

const router = async (route) => {
    //Para limpiar el contenido cada vez que cambia
    content.innerHTML = '';
    switch(route) {
        case '#/':
            return content.appendChild(pages.home());
        case '#/posts':
            return content.appendChild(await pages.posts());
        case '#/products':
            return console.log("products!")
        default:
            return console.log("404")
    }

}

//Exportar para poder utilizar en un import en main js
export {router};