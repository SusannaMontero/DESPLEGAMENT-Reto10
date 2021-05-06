import views from '../views/posts.html'

// Funcion que recoje la informacion de posts de ejemple de la pagina indicada
const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    await response.json();
}

export default async () => {

    const divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    const posts = await getPosts();
    console.log(posts);

    return divElement;
};