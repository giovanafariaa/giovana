const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Menu responsivo
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Função para validar o formulário
function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    if (!nome) {
        alert('Por favor, preencha o seu nome.');
        return false;
    }

    if (!email || !validarEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    if (!telefone || telefone.length < 15) {
        alert('Por favor, insira um número de telefone válido.');
        return false;
    }

    if (!mensagem) {
        alert('Por favor, escreva sua mensagem.');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}

// Função para validar o formato do e-mail
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para formatar o número de telefone no padrão brasileiro
function formatarTelefone(telefone) {
    let valor = telefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
    if (valor.length > 11) {
        valor = valor.slice(0, 11); // Limita o número a 11 dígitos
    }

    if (valor.length <= 10) {
        // Formato (XX) XXXX-XXXX
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else {
        // Formato (XX) XXXXX-XXXX
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
    }

    telefone.value = valor; // Atualiza o valor no campo
}
