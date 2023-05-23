function addNumber(x: number, y:number): number{
  return x + y
}

let soma: number = addNumber(5,5)

console.log(soma);

function MeuNome(nome: string){
 return nome
}

console.log(MeuNome('Fabio'))

function callToNumber(phone: string|number){
  return phone
}

console.log(callToNumber('123456789'))

async function getDatabase(id: number): Promise<string> {
  return 'Fabio'
}