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

const mainOptions = document.querySelectorAll('.main-option');

mainOptions.forEach(function (option) {
    option.addEventListener('click', function () {
        const subMenu = this.nextElementSibling;
        subMenu.classList.toggle('active');
    });
});

// Cerrar el men� al hacer clic fuera de �l
document.addEventListener("click", function () {
    closeMenu();
});

// Evitar que el clic se propague desde el men� al documento
document.querySelector("nav").addEventListener("click", function (e) {
    e.stopPropagation();
});