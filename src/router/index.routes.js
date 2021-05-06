import Home from '../views/home.js'

let content = document.getElementById('root');

const router = (route) => {
    //Para limpiar el contenido cada vez que cambia
    content.innerHTML = '';
    switch(route) {
        case '#/':
            return content.appendChild(Home());
        case '#/posts':
            return console.log("posts!")
        case '#/products':
            return console.log("products!")
        default:
            return console.log("404")
    }

}

//Exportar para poder utilizar en un import en main.js
export {router};