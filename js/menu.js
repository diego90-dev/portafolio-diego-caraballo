// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".nav-links");

    // Agrega un evento de clic al menú de hamburguesa
    burger.addEventListener("click", function() {
        // Alterna la clase 'active' en el menú de navegación
        navLinks.classList.toggle("active");
    });
});

 // Script para el año actual en el footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Script para hacer funcional el menú responsive 
        document.addEventListener('DOMContentLoaded', () => {
            const burgerToggle = document.getElementById('burger-toggle');
            const navLinks = document.querySelector('.nav-links');

            // Función para manejar la apertura/cierre del menú al hacer clic
            burgerToggle.addEventListener('change', function() {
                navLinks.classList.toggle('active', this.checked);
            });

            // Función para cerrar el menú al hacer clic en un enlace de navegación
            navLinks.querySelectorAll('li a').forEach(item => {
                item.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    burgerToggle.checked = false; // Resetea el checkbox
                });
            });
        });