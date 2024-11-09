// Validação do formulário de newsletter
document.querySelector("#newsletter form").addEventListener("submit", function(event) {
    const emailInput = document.querySelector("#email");
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailValue)) {
        event.preventDefault(); // Impede o envio
        emailInput.setCustomValidity("Por favor, insira um email válido.");
        emailInput.reportValidity(); // Exibe o erro
        emailInput.focus();
    } else {
        emailInput.setCustomValidity(""); // Limpa a mensagem de erro se o e-mail for válido
    }
});

// Navegação suave para links internos
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Deslocamento para não cobrir o topo
                behavior: 'smooth'
            });
        }
    });
});

// Exibir/ocultar botão "Voltar ao Topo"
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Função de rolar para o topo
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Alternar o menu hambúrguer
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
});

// Evitar o fechamento do menu quando clicar dentro de um item de navegação
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById("nav-menu");
        if (window.innerWidth <= 768) { // Só fecha o menu em telas menores
            navMenu.classList.remove('show');
        }
    });
});
