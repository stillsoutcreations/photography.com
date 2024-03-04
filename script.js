document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.column img');
    const fullScreenOverlay = document.getElementById('fullScreenOverlay');
    const expandedImage = document.getElementById('expandedImage');

    images.forEach(image => {
        image.addEventListener('click', function () {
            fullScreenOverlay.style.display = 'flex';
            expandedImage.src = this.src;
        });
    });

    fullScreenOverlay.addEventListener('click', function () {
        this.style.display = 'none';
    });
});
