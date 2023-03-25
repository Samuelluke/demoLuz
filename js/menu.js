var menu = document.getElementById('hamburger'),
    mL = document.getElementById('menu-List');
main = document.getElementById('changed'),
    contadorMenu = 0;

function activado() {

    if (contadorMenu == 0) {
        main.classList.add('active');
        mL.classList.add('active');
        contadorMenu = 1;

    } else {

        main.classList.remove('active');
        mL.classList.remove('active');
        contadorMenu = 0;

    }
}

menu.addEventListener('click', activado, true)