import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'

// Captura el evento de cada vez que cambia de hash(#)
window.addEventListener('haschange', () => {
    console.log(window.location.hash)
})