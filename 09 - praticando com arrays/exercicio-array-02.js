/**
 * Crie um programa que seja capaz de percorrer uma lista
 * de números e imprima cada número PAR encontrado
 */

const numeros = [1,2,3,4,5,6,7,8,9,10,60,76,99]

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 === 0){
    console.log(numeros[i])
  }
}
