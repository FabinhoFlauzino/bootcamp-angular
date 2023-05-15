class CardNews extends HTMLElement{
  constructor(){
    super()

    const shadow = this.attachShadow({
      mode: "open"
    })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build(){
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'card')

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card__left')

    const autor = document.createElement('span')
    autor.textContent = `by ${this.getAttribute('autor') || 'Anonimus'}`
    
    const linkTitle = document.createElement('a')
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('link-url')

    const conteudo = document.createElement('p')
    conteudo.textContent = this.getAttribute('content')
    
    cardLeft.appendChild(autor)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(conteudo)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card__right')

    const imagem = document.createElement('img')
    imagem.src = this.getAttribute('src-img')

    cardRight.appendChild(imagem)
    

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles(){
    const style = document.createElement('style')
    style.textContent = `
      .card{
        width: 720px;
        border: 1px solid #000;
        display: flex;
        margin: 30px auto;
      }
      
      .card img{
        max-width: 100%;
        display: block;
      }
      
      /* .card__left, .card__right{
      
      } */
      
      .card__left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
      }
      
      .card__left > span{
        font-weight: 500;
      }
      
      .card__left > h1{
        margin-top: 15px;
        font-size: 25px;
      }
      
      .card__left > p{
        color: gray;
      }
    `

    return style
  }
}

customElements.define('card-news', CardNews)