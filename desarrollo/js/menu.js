// Función para cerrar el menú
function closeMenu() {
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");
    var footer = document.querySelector("footer");
    nav.style.left = "-100vw";
    body.classList.remove("menu-opened");
    footer.classList.remove("menu-opened");
}

// Función para abrir el menú
function openMenu() {
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");
    var footer = document.querySelector("footer");
    nav.style.left = "0";
    body.classList.add("menu-opened");
    footer.classList.add("menu-opened");
}

document.getElementById("menuBtn").addEventListener("click", function (e) {
    e.stopPropagation(); // Evita que el clic se propague al documento
    var nav = document.querySelector("nav");
    if (nav.style.left === "-100vw") {
        openMenu();
    } else {
        closeMenu();
    }
});

// Agregar event listener al contenedor del menú
document.getElementById("menuContainer").addEventListener("click", function (e) {
    // Evitar la propagación del evento al documento
    e.stopPropagation();

    // Verificar si el clic ocurrió en una opción principal del menú
    if (e.target.classList.contains('main-option')) {
        // Obtener el menú desplegable asociado a esta opción principal
        const subMenu = e.target.nextElementSibling;

        // Alternar la clase 'active' para mostrar u ocultar el menú desplegable
        subMenu.classList.toggle('active');
    }
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function () {
    closeMenu();
});

// Evitar que el clic se propague desde el menú al documento
document.querySelector("nav").addEventListener("click", function (e) {
    e.stopPropagation();
});
