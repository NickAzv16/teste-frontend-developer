// Quando clicamos na pergunta, chamamos essa função, para mostrar ou esconder a resposta.

function clicarPergunta(botao) {
    const caixaPergunta = botao.closest('.caixaPergunta');
    const resposta = caixaPergunta.querySelector('.resposta');

    resposta.classList.toggle('aberto');
    resposta.classList.toggle('girar');
}