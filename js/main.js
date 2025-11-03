document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------
    // 1. Lógica para el botón "Mostrar Más Proyectos"
    // ----------------------------------------------------
    const loadMoreBtn = document.getElementById('load-more-btn');
    const hiddenProjects = document.querySelectorAll('.portfolio-item.hidden-project');
    const projectsPerClick = 1; // Cuántos proyectos se muestran por cada click

    // Oculta todos los proyectos que tienen la clase hidden-project al cargar la página
    hiddenProjects.forEach(project => {
        project.style.display = 'none';
    });

    // Función para mostrar más proyectos
    function showMoreProjects() {
        let projectsShownThisClick = 0;
        for (let i = 0; i < hiddenProjects.length; i++) {
            if (hiddenProjects[i].style.display === 'none' && projectsShownThisClick < projectsPerClick) {
                hiddenProjects[i].style.display = 'block'; // O 'flex' si tu grid lo requiere, pero Bootstrap 'col' es 'block'
                projectsShownThisClick++;
            }
        }

        // Si ya no quedan más proyectos ocultos, esconde el botón
        const remainingHidden = document.querySelectorAll('.portfolio-item.hidden-project[style*="display: none"]').length;
        if (remainingHidden === 0) {
            loadMoreBtn.style.display = 'none';
        }
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', showMoreProjects);
        if (hiddenProjects.length === 0) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // ----------------------------------------------------
    // 2. Lógica para el Modal de Detalles del Proyecto
    // ----------------------------------------------------
    const projectDetailModal = document.getElementById('projectDetailModal');
    if (projectDetailModal) {
        projectDetailModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget; 
            const title = button.getAttribute('data-project-title');
            const link = button.getAttribute('data-project-link');

            const modalTitle = projectDetailModal.querySelector('.modal-title');
            const modalProjectLink = projectDetailModal.querySelector('#modalProjectLink');
            const modalVisitProjectBtn = projectDetailModal.querySelector('#modalVisitProject');

            modalTitle.textContent = title;
            modalProjectLink.href = link;
            modalProjectLink.textContent = link; 
            modalVisitProjectBtn.href = link;
        });
    }

    // ----------------------------------------------------
    // 3. Lógica para el Año Actual en el Footer
    // ----------------------------------------------------
    const currentYearSpan = document.getElementById('current-year-portfolio');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Nota: La lógica JavaScript para "Enviar Email" + "Abrir Página" ha sido eliminada
    // porque el objetivo es solo abrir el cliente de correo.
    // El enlace 'mailto:' en el HTML gestiona esto directamente.
});