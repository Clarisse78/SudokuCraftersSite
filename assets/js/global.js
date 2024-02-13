document.addEventListener('DOMContentLoaded', function() {
    var navToggleBtn = document.getElementById('nav-toggle-btn');
    var linksWrapper = document.getElementById('links-wrapper');

    navToggleBtn.addEventListener('pointerdown', function(event) {
        if (linksWrapper) {
            linksWrapper.classList.toggle('active');
            if (linksWrapper.classList.contains('active')) {
                linksWrapper.setAttribute('aria-label', 'close');
                linksWrapper.setAttribute('aria-expanded', 'true');
            } else {
                linksWrapper.removeAttribute('aria-label');
                linksWrapper.setAttribute('aria-expanded', 'false');
            }
            event.target.setPointerCapture(event.pointerId);
        } else {
            console.error('Element with ID "links-wrapper" not found.');
        }
    });
});