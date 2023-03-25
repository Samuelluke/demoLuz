var btndrk = document.getElementById('darkmode'),
    btndrkC = document.getElementById('conf'),
    cajas = document.getElementById('fond'),
    CDark = 0;

function cambios() {
    if (CDark == 0) {
        cajas.classList.add('blue');
        CDark = 1;
        localStorage.setItem('blue', 'true');
        main.classList.remove('active');
        mL.classList.remove('active');
        contadorMenu = 0;
    } else {
        cajas.classList.remove('blue');
        CDark = 0;
        localStorage.setItem('blue', 'false');
        main.classList.remove('active');
        mL.classList.remove('active');
        contadorMenu = 0;
    }
}

btndrk.addEventListener('click', cambios, true)
btndrkC.addEventListener('click', cambios, true)


if (localStorage.getItem('blue') === 'true') {
    document.body.classList.add('blue');
} else {
    document.body.classList.remove('blue');
}