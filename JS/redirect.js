document.addEventListener('click', function(event) {
    // Verifica si el elemento clicado es un enlace (etiqueta <a>)
    if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');
        
        // Comprueba si el href termina en "/u" seguido de un número (usando expresión regular)
        if (href && /\/u\d+$/.test(href)) {
            // Evita la redirección normal del enlace
            event.preventDefault();
            
            // Redirige a la página de inicio de sesión
            window.location.href = '/login?redirect=%2Fu7'; // Ajusta esto a la URL de tu página de inicio de sesión
        }
    }
});