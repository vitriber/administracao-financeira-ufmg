import { Component } from '@angular/core';
import util from "../util";

@Component({
  selector: 'app-informacao-de-seguro',
  templateUrl: './informacao-de-seguro.html',
  styleUrls: ['./informacao-de-seguro.css']
})
export class InformacaoDeSeguro {
  prazoDeCoberturaAnual = 0;
  apolice = 0;
  probabilidadeDeSinistro = 0;
  rentabilidadeDoFundoAtuarial = 0;
  despesasGeraisDaSeguradora = 0;
  totalDeSeguradosParaOSinistro = 0;
  premioAnual = 0;

  calcularPremioEmParcelaUnicaAnual() {
    this.premioAnual = (((this.probabilidadeDeSinistro/100) * this.apolice) / Math.pow(1 + (this.rentabilidadeDoFundoAtuarial/100), this.prazoDeCoberturaAnual)) + this.despesasGeraisDaSeguradora / this.totalDeSeguradosParaOSinistro;
  }
}
