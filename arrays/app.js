// ArrayMethods - Ultima semana de JS
// ECMA - European Computer Manufacturer Association
let nome = 'Marcelo';

if(nome){
    var teste = 'teste';
}
console.log(teste);

// BabelJS - compilador de JS para JS

// ES6 - 2015(ES2015) - Métodos de Array(forEach, map, filter, find, findIndex, flat, indexOf)
// array.map - rastreia o tamanho do array
let array_nomes = ['Marcelo', 'Maria', 'Joao', 'Mariana', 'Pedro', 'Ingrid'];
array_nomes.map(function(valorIndex, Indice_index){
    console.log(`
    - Posição do item: ${Indice_index}
    - Valor do item: ${valorIndex}
    `);
});

for(let i = 0; i < array_nomes.length; i++){
    console.log(`
    - Posição do item: ${i}
    - Valor do item: ${array_nomes[i]}
    `);
}

//Array.find
// * Procure dentro do array pelo nome = 'Mariana'
let array_nomes = ['Marcelo', 'Maria', 'Joao', 'Mariana', 'Pedro', 'Ingrid'];
for(let i = 0; i < array_nomes.length; i++){
    if(array_nomes[i] === 'Mariana'){
        console.log(`Posição ${i}= ${array_nomes[i]}`);
        break;
    }
}

const nome = array_nomes.filter(function(value){
    return value === 'Mariana';
});
console.log(nome);

//let array_comida = ['Abacaxi', 'Mamão', 'Tomate', 'Pimentão', 'Maçã', 'Pera'];
let array_comida = [
 //objeto abre e fecha chaves {}
 // o que vem antes dos pontos é as {} e depois dos pontos é o "Valor"
    {Vegetal: 'Abacaxi', tipo: 'Fruta'},
    {Vegetal: 'Tomate', tipo: 'Legume'},
    {Vegetal: 'Mamão', tipo: 'Fruta'},
    {Vegetal: 'Pimentão', tipo: 'Legume'},
    {Vegetal: 'Maçã', tipo: 'Fruta'},
    {Vegetal: 'Pera', tipo: 'Fruta'}
];
const comida = array_comida.filter(function(value){
    return value.tipo === 'Fruta';
});
console.log(comida);

// lista = [1, 2, 3, 4, 5]; //Array
// objeto = { } //object - chave: valor

/**const nome = array_nomes.find(value => value === 'Mariana');
console.log(nome);*/

