/**
 Calcular o IMC de uma pessoa
 IMC = peso / (altura * altura)

 Elabore um algoritimo que dado peso e altura de um adulto mostre sua condição
 de acordo com a tabela abaixo

 IMC em adultos condiçoes
 - Abaixo de 18.5 = Abaixo do peso
 - Entre 18.5 e 25 peso normal
 - Entre 25 e 30 Acima do peso
 - Entre 30 e 40 Obeso
 - Acima de 40 Obesidade Grave
 */

const peso = 90;
const altura = 1.79;
const imc = peso / Math.pow(altura, 2)

if(imc < 18.5){
  console.log('Abaixo do peso')
} else if(imc >= 18.5 && imc < 25){
  console.log('Peso normal')
} else if(imc >=25 && imc < 30){
  console.log('Acima do peso')
} else if(imc >=30 && imc <= 40){
  console.log('Obeso');
}
console.log(imc)
