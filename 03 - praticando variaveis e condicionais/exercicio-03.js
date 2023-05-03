/**
Calcular preço a ser pago de um produto, considerando o preço normal da etiqueta
e a escolha da condição de pagamento

Código condição de pagamento
1 - À vista Débito, recebe 10% de desconto
2 - À vista no Dinheiro ou Pix, recebe 15% de desconto
3 - Em até duas vezes, preço normal da etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoProduto = 100;
const tipoPagamento = 1;
const dezPorcento = precoProduto * (10/100);
const quinzePorcento = precoProduto * (15/100);

if(tipoPagamento === 1){
  console.log(precoProduto - dezPorcento);
} else if(tipoPagamento === 2){
  console.log(precoProduto - quinzePorcento);
} else if(tipoPagamento === 3){
  console.log(precoProduto);
} else {
  console.log(precoProduto + dezPorcento);
}


