document
.getElementById("calcular-pontos")
    .addEventListener("click", function(){
        const quant_vit = Number(document.getElementById("vitorias").value);
        const quant_emp = Number(document.getElementById("empates").value);
        const quant_der = Number(document.getElementById("derrotas").value);

            const pont_vit = 3;
            const pont_emp = 1;
            const pont_der = 0;
        
            const total_pontos = 
        quant_vit * pont_vit + quant_emp * pont_emp + quant_der * pont_der;

        if(total_pontos < 20){
            document.getElementById('total_pontos').innerHTML = "rebaixado";
        } else if(total_pontos >= 20 && total_pontos < 35){
            document.getElementById('total_pontos').innerHTML = "Copa BR";
        } else if(total_pontos >= 35 && total_pontos < 50){
            document.getElementById('total_pontos').innerHTML = "Sulamericana";
        } else{
            document.getElementById('total_pontos').innerHTML = "Libertadores";
        }
    
    document.getElementById('total_vitorias').innerHTML = quant_vit;
    document.getElementById('total_empates').innerHTML = quant_emp;
    document.getElementById('total_derrotas').innerHTML = quant_der;
    document.getElementById('total_pontos').innerHTML = `${String(total_pontos).replace('.',',')}`;


});

/*
Faça um algoritmo que peça do usuário a quantidade de vitórias,
empates e derrotas de um clube e calcule o total de pontos
adquiridos. Receba o resultado e determine:
   
    - Se tirou abaixo de 20 pontos, rebaixado;
    - Se tirou acima de 20 pontos e abaixo de 35 pontos,
    classificado para a Copa do BR;
    - Se tirou acima de 35 pontos e abaixo de 50 pontos,
    classificado para a Sulamericana;
    - Se tirou acima de 50 pontos, classificado para a 
    Libertadores;

Considere que uma vitória é 3 pontos, um empate é 1 ponto
e uma derrota é 0 ponto.
*/