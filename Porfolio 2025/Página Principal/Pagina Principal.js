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
        const sets = [
            [
                { img: 'Fotos/Cibersegurança.png', },
                { img: 'Fotos/Fundamentos de IA.png', },
                { img: 'Fotos/Introdução Ciencia de Dados.png',  }
            ],
            [
                { img: 'Fotos/Introdução a Bi.png', },
                { img: 'Fotos/Análise de Dados BI.png', },
                { img: 'Fotos/SharePoint.png', }
            ]
        ];

        let currentSet = 0; // Começa com o primeiro conjunto
        const certificadosContainer = document.getElementById('certificados-container');

        // Função para atualizar os certificados
        function updateCertificados() {
            certificadosContainer.innerHTML = ''; // Limpa os certificados atuais
            sets[currentSet].forEach(certificado => {
                const div = document.createElement('div');
                div.className = 'certificado';
                const img = document.createElement('img');
                img.src = certificado.img;
                img.alt = certificado.text;
                div.appendChild(img);
                const textDiv = document.createElement('div');
                textDiv.textContent = certificado.text;
                div.appendChild(textDiv);
                certificadosContainer.appendChild(div);
            });

            // Aplica o efeito de transição
            const certificados = certificadosContainer.querySelectorAll('.certificado');
            certificados.forEach((certificado, index) => {
                setTimeout(() => {
                    certificado.classList.add('visible'); // Adiciona a classe 'visible' após um atraso
                }, index * 300); // Atraso para cada certificado
            });
        }

        // Função para alternar entre os conjuntos
        function toggleSets() {
            currentSet = (currentSet + 1) % sets.length; // Alterna entre 0 e 1
            updateCertificados();
        }

        // Inicializa os certificados e configura a alternância automática
        window.onload = function() {
            updateCertificados(); // Mostra os certificados ao carregar
            setInterval(toggleSets, 5000); // Alterna a cada 5 segundos
        };

        function openModal() {
            document.getElementById('portfolioModal').style.display = "flex";
        }
        
        function closeModal() {
            document.getElementById('portfolioModal').style.display = "none";
        }
        
        function keepModalOpen() {
            // Não fecha o modal enquanto o mouse está sobre ele
            document.getElementById('portfolioModal').style.display = "flex";
        }
        
        // Fecha o modal se o usuário clicar fora da área do modal
        window.onclick = function(event) {
            if (event.target == document.getElementById('portfolioModal')) {
                closeModal();
            }
        }

        