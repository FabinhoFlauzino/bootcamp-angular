import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ) {
    //http://caminho/rota/{1}
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    //trazendo os params caso houver mais coisas na url
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //http://caminho/rota/1{?name=fabio&token=123}
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )


  }

  ngOnInit(): void {
    //redirecionando
    setInterval(() => {
      this.navegador.navigate(['/'])
    }, 5000)
  }

}
