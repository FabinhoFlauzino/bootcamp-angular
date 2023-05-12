/**
 * Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de consumo po Km rodado.
 * Crie um método que dado a quantidade de quilometros e o preço do com bustivel nos dê
 * o valor gasto em reias para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  consumoMedioKm;

  constructor(marca, cor, consumoMedioKm){
    this.marca = marca
    this.cor = cor
    this.consumoMedioKm = 1 / consumoMedioKm 
  }

  calcularViagem (distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.consumoMedioKm * precoCombustivel;
  }

}

const gol = new Carro('VW', 'Preto', 10)
console.log(gol.calcularViagem(100, 5));
