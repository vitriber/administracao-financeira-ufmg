import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wacc',
  templateUrl: './wacc.component.html',
  styleUrls: ['./wacc.component.css']
})
export class WaccComponent {
  E = 0;
  D = 0;
  V = 0;
  Ke = 0;
  Kd = 0;
  ti = 0;
  Resultado = 0;

  calcularWacc(){
    this.V = this.D + this.E;
    this.Resultado = (this.E/this.V) * this.Ke + (this.D/this.V) * this.Kd * (1 - this.ti);
  }

}
