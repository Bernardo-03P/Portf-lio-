let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const certificados = document.querySelectorAll('.certificado');
        const totalCertificados = certificados.length;

        function updateCarousel() {
            currentIndex = (currentIndex + 1) % totalCertificados;
            const offset = -currentIndex * 150; // Ajuste de acordo com a largura dos certificados
            carousel.style.transform = `translateX(${offset}px)`;
        }

        setInterval(updateCarousel, 2000); // Muda a cada 2 segundos