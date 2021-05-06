import views from '../views/home.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    //Con getElementsById selector document.getElementsById('btnClick')
    const btnClick = divElement.querySelector('#btnClick')
    btnClick.addEventListener('click', () => {
        alert('CLICK!')
    })

    return divElement;
};