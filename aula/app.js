/**Faça um programa que leia 20 números inteiros e armazene-os num vetor
Armazene os números pares no vetor PAR e os números IMPARES no vetor IMPARES
Imprima os três vetores.*/

/**const vetor_dados = [];
const vetor_par = [];
const vetor_impar = [];

for (let i = 0; i < 20; i++){

    let valor = prompt('informe o número da posição ${i}');
    vetor_dados.push(valor);

}

for(let i = 0; i < vetor_dados.length; i++){

    if(vetor_dados[i] % 2 === 0){
        vetor_par.push(vetor_dados[i]);
    } else{
        vetor_impar.push(vetor_dados[i]);
    }
}
*/

/**Faça um programa que leia um array de 5 números inteiros,mostre a soma,
 * a multiplicação e os números
 */

const array_numeros = [];
let soma = 0;
let multiplicacao = 1;
for(let i = 0; i < 5; i++){

    let valor = Number(prompt(`Informe o numero da posição ${i}`));
    array_numeros.push(valor);
}

for(let i = 0; i < array_numeros.length; i++){

    soma = soma + array_numeros[i];
    multiplicacao = multiplicacao * array_numeros[i];
    
}

alert(`
soma dos valores: ${soma}
multiplicacao dos valores: ${multiplicacao}
`);