//interfaces (type x interface)
type robot = {
   name: string
   id: number
}

interface robot2 {
  readonly id: number
  name: string
}

const bot: robot = {
  name: "Fulano",
  id: 10
}

const bot2: robot2 = {
  id: 1,
  name: "Ciclano"
}