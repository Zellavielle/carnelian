// Entoura Themes
document.addEventListener('click', function(event) {
    const linkElement = event.target.closest('a');
    if (linkElement) {
        const href = linkElement.getAttribute('href');
        if (href && /\/u\d+$/.test(href)) {
            event.preventDefault();
            window.location.href = '/login';
        }
    }
});

window.addEventListener('error', function(event) {
    console.error("Error caught:", event.message);
});
