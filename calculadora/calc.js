const soma = (n1, n2) => n1 + n2;

const subtracao = (n1, n2) => n1 - n2;

const multiplicacao = (n1, n2) => n1 * n2;

const divisao = (n1, n2) => n1 / n2;
 
document.getElementById('calcular').addEventListener('click', function(){
   
   const num1 = Number(document.getElementById('num1').value);
   const num2 = Number(document.getElementById('num2').value);

   const operacao = document.getElementById('operacao').value;

   if(operacao === 'soma') {
      document.getElementById(
         'resultado'
         ).innerHTML = `<b>O resultado da soma é ${soma(num1, num2)}</b>`;
   } else if(operacao === 'subtracao') {
      document.getElementById(
         'resultado'
         ).innerHTML = `<b>O resultado da subtracao é ${subtracao(num1, num2)}</b>`;
   } else if(operacao === 'multiplicacao'){
      document.getElementById(
         'resultado'
         ).innerHTML = `<b>O resultado da multiplicacao é ${multiplicacao(num1, num2)}</b>`;
   } else {
      document.getElementById(
         'resultado'
         ).innerHTML = `<b>O resultado da divisao é ${divisao(num1, num2)}</b>`;
   }
});