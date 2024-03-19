// Función para abrir el menú
function openMenu() {
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");
    var footer = document.querySelector("footer");
    nav.style.left = "0";
    body.classList.add("menu-opened");
    footer.classList.add("menu-opened");
}

// Función para cerrar el menú
function closeMenu() {
    var body = document.querySelector("body");
    var nav = document.querySelector("nav");
    var footer = document.querySelector("footer");
    nav.style.left = "-100vw";
    body.classList.remove("menu-opened");
    footer.classList.remove("menu-opened");
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

// Agregar event listener para las subopciones principales
document.querySelectorAll('.main-option, .sub-option').forEach(function(option) {
    option.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que el clic se propague al documento

        const subMenu = this.nextElementSibling;
        if (subMenu) {
            subMenu.classList.toggle('active');
        }
    });
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function () {
    closeMenu();
});

// Evitar que el clic se propague desde el menú al documento
document.querySelector("nav").addEventListener("click", function (e) {
    e.stopPropagation();
});
