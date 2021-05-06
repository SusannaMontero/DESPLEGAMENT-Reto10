import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import {router} from './router/index.routes';

console.log('hello world');
console.log(window.location.host);

router(window.location.hash);

// Captura el evento de cada vez que cambia de hash(#)
window.addEventListener('hashchange', () => {
    router(window.location.hash);
})