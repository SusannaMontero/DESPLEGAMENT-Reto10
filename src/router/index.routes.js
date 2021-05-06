const router = (route) => {
    switch(route) {
        case '#/':
            return console.log("home!")
        case '#/posts':
            return console.log("posts!")
        default:
            return console.log("404")
    }

}

//Exportar para poder utilizar en un import en main.js
export {router};