export default () => {
    const views = `
        <h1>Hello world</h1>
        <p class="text-danger">hell world con javascript router</p>
    `;

    const divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    return divElement;
};