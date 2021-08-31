import { Component } from '@angular/core';
import { inv, multiply } from 'mathjs/';

@Component({
  selector: 'app-portfolio-replicante',
  templateUrl: './portfolio-replicante.component.html',
  styleUrls: ['./portfolio-replicante.component.css']
})
export class PortfolioReplicanteComponent {

  alvo = "";
  ativos = [];
  portfolioReplicante = [];
  matrizMediaInv = [];
  sensibilidades = [];
  erro = false;

  subtraiVetores(vetor1, vetor2) {
    let resultado = [];
    for (let i = 0; i < vetor1.length; i++) {
      resultado[i] = vetor1[i] - vetor2[i];
    }
    return resultado;
  }

  calculaDiferenca(matriz) {
    let resultado = [];
    // Começa com 1, por que a diferença vai ser sempre do atual com o anterior
    for (let i = 1; i < matriz.length; i++) {
      let anterior = matriz[i - 1];
      let atual = matriz[i];
      resultado.push(this.subtraiVetores(atual, anterior));
    }
    return resultado;
  }

  divideVetor(vetor) {
    let resultado = [];
    for (let i = 0; i < vetor.length; i++) {
      resultado[i] = vetor[i] / vetor[0];
    }
    return resultado;
  }

  calculaDivisoes(matriz) {
    return matriz.map((vetor) => this.divideVetor(vetor));
  }

  calculaMediasDasColunas(matriz) {
    let medias = [];

    // Começa do 1 para excluir o ativo alvo
    for (let i = 1; i < matriz[0].length; i++) { // colunas
      medias.push(0);

      // Loop das linhas
      for (let j = 0; j < matriz.length; j++) { // linhas
        medias[i - 1] += matriz[j][i];
      }
      medias[i - 1] /= matriz.length;
    }

    return medias;
  }

  geraVetorUnitario(n) {
    let resultado = [];

    for (let i = 0; i < n; i++) {
      resultado.push(1);
    }

    return resultado;
  }

  onLoad(csv) {
    this.alvo = csv[0][0];
    this.ativos = csv[0].slice(1);
    let variacoes = csv.slice(1);
    this.calculaMatrizMediaInv(variacoes);
  }

  calculaMatrizMediaInv(variacoes) {
    let derivada1 = this.calculaDiferenca(variacoes);

    let delta = this.calculaDivisoes(derivada1)

    let derivada2 = this.calculaDiferenca(derivada1);

    let gama = this.calculaDivisoes(derivada2)

    let matrizMedia = [
      this.calculaMediasDasColunas(delta),
      this.calculaMediasDasColunas(gama),
    ];
    matrizMedia.push(this.geraVetorUnitario(matrizMedia[0].length));

    this.matrizMediaInv = inv(matrizMedia);

    // Intencionalmente colunar
    this.sensibilidades = [
      [0], // sensibilidade do delta
      [0], // sensibilidade do gama
      [1] // sempre 1
    ];

    this.calculaPortfolioReplicante();
  }

  calculaPortfolioReplicante() {
    try {
      this.erro = false;
      this.portfolioReplicante = multiply(this.matrizMediaInv, this.sensibilidades);
    } catch(error) {
      this.erro = true;
    }
  }
}
