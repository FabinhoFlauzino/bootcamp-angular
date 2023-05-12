//Organizando o código
function main() {
  //Função de procedimento - que não possuem retorno
  //Ela executa uma rotina
  function nome(nome) {
    console.log('Meu nome é ' + nome)
  }
  nome('Fulano')

  //Função com retorno
  function quadrado(valor) {
    return Math.pow(valor, 2)
  }
  const quadradoDeDez = quadrado(10)
  const quadradoDeCem = quadrado(40)

  console.log(quadradoDeDez + quadradoDeCem)
  console.log(quadrado(10) + quadrado(40))

  function incrementarJuros(valor, juros) {
    const valorAcrescimo = (juros / 100) * valor
    return valor + valorAcrescimo
  }

  function descontoVista(valor, desconto) {
    const valorDesconto = (desconto / 100) * valor
    return valor - valorDesconto
  }

  console.log(`Valor com Juros ${incrementarJuros(100, 50)}`)
  console.log(`Valor com Desconto ${descontoVista(100, 50)}`)
}

main()
