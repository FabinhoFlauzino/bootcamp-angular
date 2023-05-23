//classes
class Character {
  protected name?: string
  public stregth: number
  private skill: number

  constructor(name: string,stregth: number,skill: number){
    this.name = name
    this.stregth = stregth
    this.skill = skill
  }

  public attack(): void{
    console.log(`Ataque com ${this.stregth}`);
    
  }
}

const p1 = new Character('Algum',10, 98)