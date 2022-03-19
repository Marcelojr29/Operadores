document.getElementById("calcular-preco").addEventListener("click", function(){
    let quant_abacaxis = Number(document.getElementById('abacaxis').value);
    let quant_banana = Number(document.getElementById('bananas').value);

    const valor_abacaxi = 1.25;
    const valor_banana = 0.6;

    let total_compra = 
        quant_abacaxis * valor_abacaxi + quant_banana * valor_banana;

        if(total_compra >= 130){
            total_compra = total_compra + ((5 / 100) * total_compra);
        } else{
            total_compra = total_compra + ((10 / 100) * total_compra);
        }

        document.getElementById('total-abacaxis').innerHTML = quant_abacaxis;
        document.getElementById('total-bananas').innerHTML = quant_banana;
        document.getElementById('preco-abacaxi').innerHTML = `R$ ${String(valor_abacaxi).replace('.', ',')}`;
        document.getElementById('preco-bananas').innerHTML = `R$ ${String(valor_banana.toFixed(2)).replace('.', ',')}`;
        document.getElementById('total_compra').innerHTML = `R$ ${String(total_compra.toFixed(2)).replace('.', ',')}`;

});