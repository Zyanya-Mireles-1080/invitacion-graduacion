const sobre = document.querySelector('.sobre');
const solapaSuperior = document.querySelector('.solapa-superior');
const tarjeta = document.querySelector('.tarjeta');

sobre.addEventListener('click', () => {
    if (!sobre.classList.contains('open')) {
        solapaSuperior.classList.add('open');
        sobre.classList.add('open');

        setTimeout(() => {
            sobre.classList.add('expansion');
            tarjeta.classList.add('expandida');
        }, 1000);
    }
});


