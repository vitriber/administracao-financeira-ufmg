import { Component } from '@angular/core';
import util from "../util";

@Component({
  selector: 'app-conversao-de-juros',
  templateUrl: './conversao-de-juros.component.html',
  styleUrls: ['./conversao-de-juros.component.css']
})
export class ConversaoDeJurosComponent {
  jurosAoDia = 0;
  jurosAoMes = 0;
  jurosAoAno = 0;

  calcularJurosAPartirDoDia() {
    this.jurosAoMes = util.calculaJurosDeDiaPraMes(this.jurosAoDia);
    this.jurosAoAno = util.calculaJurosDeDiaPraAno(this.jurosAoDia);
  }

  calcularJurosAPartirDoMes() {
    this.jurosAoDia = util.calculaJurosDeMesPraDia(this.jurosAoMes);
    this.jurosAoAno = util.calculaJurosDeMesPraAno(this.jurosAoMes);
  }

  calcularJurosAPartirDoAno() {
    this.jurosAoDia = util.calculaJurosDeAnoPraDia(this.jurosAoAno);
    this.jurosAoMes = util.calculaJurosDeAnoPraMes(this.jurosAoAno);
  }
}
