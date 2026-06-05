const botao = document.getElementById("saibaMais");

botao.addEventListener("click", () => {
    alert(
        "O futuro sustentável depende da união entre tecnologia, produção agrícola e preservação ambiental."
    );
});

// Animação suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
