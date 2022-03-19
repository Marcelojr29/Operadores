document.getElementById('calcular').addEventListener('click', () =>{
    let ganho_hora = Number(document.getElementById('ganho_hora').value);
    let hora_mes = Number(document.getElementById('hora_mes').value);

    let salario = ganho_hora * hora_mes;
    document.getElementById('salario').innerHTML = `O seu salário é de R$ ${salario}`;
});