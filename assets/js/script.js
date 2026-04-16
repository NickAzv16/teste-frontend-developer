// Quando clicamos na pergunta, chamamos essa função, para mostrar ou esconder a resposta.

function clicarPergunta(botao) {
    const caixaPergunta = botao.closest('.caixaPergunta');
    const resposta = caixaPergunta.querySelector('.resposta');

    resposta.classList.toggle('aberto');
    resposta.classList.toggle('girar');
}

// função para enviar formulário e aparecer mensagem.
function enviaForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;

    nome == "" || email == "" || celular == "" ? alert('Preencha todos os campos do formulário!') : alert("Formulário enviado com sucesso!");
}