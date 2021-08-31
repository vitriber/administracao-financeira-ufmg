import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custo-acoes-alavancadas',
  templateUrl: './custo-acoes-alavancadas.component.html',
  styleUrls: ['./custo-acoes-alavancadas.component.css']
})
export class CustoAcoesAlavancadasComponent {
  Ru = 0;
  D = 0;
  E = 0;
  Re = 0;
  Rd = 0;

  calcularccaa(){
    this.Re = this.Ru + ( (this.D / this.E) * (this.Ru - this.Rd));
  }

}
