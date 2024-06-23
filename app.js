let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora do desafio';

function verificaConsole() {
    console.log('o botão console foi clicado');
};

function verificaAlerta() {
    alert ('o botão alerta foi clicado');
};

function verificaPrompt() {
    let estado = prompt ('digite um nome de um estado no brasil:');
    alert (`estive em ${estado} e lembrei de vc`);    
};


function verificaSoma() {
    let primeiroNumero = parseInt(prompt ('digite o primeiro número da soma:'));
    let segundoNumero = parseInt(prompt ('digite o segundo número da soma:'));
    let soma = primeiroNumero + segundoNumero;
    alert (`a soma de ${primeiroNumero} e de ${segundoNumero} é ${soma}`);
};
