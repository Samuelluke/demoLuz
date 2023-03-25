var PageServicios = document.getElementById('servicios'),
    H = document.getElementById("H"),
    About = document.getElementById("A"),
    Help = document.getElementById("P"),


    servicios = document.getElementById('servicios'),
    Home = document.getElementById('home'),
    services = document.getElementById('services'),
    P = document.getElementById('P'),
    mL = document.getElementById('menu-List'),
    main = document.getElementById('changed'),
    AU = document.getElementById('AcercaDe'),
    A = document.getElementById('about');
contadorMenu = 0,
    contador = 0;

// home inicio

function inicioo() {
    main.classList.remove('active');
    mL.classList.remove('active');
    contadorMenu = 0;




    PageServicios.classList.remove('active');
    P.classList.remove('activeP');

    H.classList.add('activeH');
    About.classList.remove('activeA');
    Help.classList.remove('activeP');


    servicios.classList.remove('active');
    Home.classList.add('active');
    A.classList.remove('active');

    services.classList.remove('active');
    AU.classList.remove('active');
    contador = 0;
}

document.getElementById("H").addEventListener("click", inicioo);
document.getElementById("home").addEventListener("click", inicioo);

// home end

// about inicio

function acercaa() {
    main.classList.remove('active');
    mL.classList.remove('active');
    contadorMenu = 0;




    PageServicios.classList.remove('active');
    P.classList.remove('activeP');

    H.classList.remove('activeH');
    About.classList.add('activeA');
    Help.classList.remove('activeP');


    servicios.classList.remove('active');
    Home.classList.remove('active');
    A.classList.add('active');

    services.classList.remove('active');

    AU.classList.add('active');
    contador = 0;
}

document.getElementById("A").addEventListener("click", acercaa);
document.getElementById("about").addEventListener("click", acercaa);

// about end





// servicio inicio

function servicioo() {
    main.classList.remove('active');
    mL.classList.remove('active');
    contadorMenu = 0;




    PageServicios.classList.add('active');
    P.classList.add('activeP');

    H.classList.remove('activeH');
    About.classList.remove('activeA');
    Help.classList.add('activeP');


    servicios.classList.add('active');
    Home.classList.remove('active');
    A.classList.remove('active');

    services.classList.add('active');
    AU.classList.remove('active');
    contador = 2;
}

document.getElementById("P").addEventListener("click", servicioo);
document.getElementById("services").addEventListener("click", servicioo);

// servicio end