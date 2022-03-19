const soma = (n1, n2) => n1 + n2;

const subtracao = (n1, n2) => n1 - n2;

const multiplicacao = (n1, n2) => n1 * n2;

const divisao = (n1,n2) => n1 / n2;

document.getElementById('calcular').addEventListener('click', function(){

    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);

    const operacao = document.getElementById('operacao').value;

    if(operacao === 'soma') {
        document.getElementById(
            'resultado_operacao'
            ).innerHTML = `<b>O resultado da soma é ${soma(numero1, numero2)}</b>`;
    } else if(operacao === 'subtracao') {
        document.getElementById(
            'resultado_operacao'
            ).innerHTML = `<b>O resultado da subtracao é ${subtracao(numero1, numero2)}</b>`;
    } else if(operacao === 'multiplicacao') {
        document.getElementById(
            'resultado_operacao'
            ).innerHTML = `<b>O resultado da multiplicacao é ${multiplicacao(numero1, numero2)}</b>`;
    } else {
        document.getElementById(
            'resultado_operacao'
            ).innerHTML = `<b>O resultado da divisao é ${divisao(numero1, numero2)}</b>`;
    }
});