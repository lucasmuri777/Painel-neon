let Tela = document.querySelector('#tela .tela-neon');
document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 10,
        autoplay: false,
        dragThreshold: 120
    });

    glide.on('run.after', function () {
        // Index do slide no meio
        const centralIndex = glide.index + Math.floor(glide.settings.perView / 2);
        
        // Pega todos os slides visíveis
        const slides = document.querySelectorAll('.glide__slide');
        
        // Pega o slide central
        const centralSlide = slides[centralIndex % slides.length];
        
        // Pega a imagem dentro do slide central
        const centralImage = centralSlide.querySelector('img').src;
        
        // Atualiza a imagem do background
        Tela.style.backgroundImage = `url(${centralImage})`;
    });

    glide.mount();
});