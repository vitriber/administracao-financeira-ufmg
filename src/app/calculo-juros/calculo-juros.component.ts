import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculo-juros',
  templateUrl: './calculo-juros.html',
  styleUrls: ['./calculo-juros.css']
})
export class CalculoJuros  {

  Capital = 0;
  Taxa = 0;
  Tempo = 0;
  CapitalComposto = 0;
  TaxaComposto = 0;
  TempoComposto = 0;
  JurosSimples = 0;
  JurosComposto = 0;

  calculaJurosSimples(){
    this.JurosSimples = (this.Capital *  this.Taxa * this.Tempo);
  }

  calculaJurosComposto(){
    this.JurosComposto = this.CapitalComposto * Math.pow((1 + this.TaxaComposto), this.TempoComposto);
  }

}
