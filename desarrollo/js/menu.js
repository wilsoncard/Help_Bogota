// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Función para abrir el menú
    function openMenu() {
        var body = document.querySelector("body");
        var nav = document.querySelector("nav");
        var footer = document.querySelector("footer");

        if (nav && body && footer) {
            nav.style.left = "0";
            body.classList.add("menu-opened");
            footer.classList.add("menu-opened");
        }
    }

    // Función para cerrar el menú
    function closeMenu() {
        var body = document.querySelector("body");
        var nav = document.querySelector("nav");
        var footer = document.querySelector("footer");

        if (nav && body && footer) {
            nav.style.left = "-100vw";
            body.classList.remove("menu-opened");
            footer.classList.remove("menu-opened");
        }
    }

    // Event listener para el botón del menú
    var menuBtn = document.getElementById("menuBtn");
    if (menuBtn) {
        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // Evita que el clic se propague al documento
            var nav = document.querySelector("nav");
            if (nav) {
                if (nav.style.left === "-100vw" || !nav.style.left) {
                    openMenu();
                } else {
                    closeMenu();
                }
            }
        });
    }

    // Agregar event listener para las subopciones principales
    var menuContainer = document.getElementById("menuContainer");
    if (menuContainer) {
        menuContainer.addEventListener("click", function (e) {
            e.stopPropagation(); // Evitar que el clic se propague al documento

            if (e.target.classList.contains('main-option') || e.target.classList.contains('sub-option')) {
                const subMenu = e.target.nextElementSibling;
                if (subMenu) {
                    subMenu.classList.toggle('active');
                }
            }
        });
    }

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function () {
        closeMenu();
    });

    // Evitar que el clic se propague desde el menú al documento
    var navElement = document.querySelector("nav");
    if (navElement) {
        navElement.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    }
});
