import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConversaoDeJurosComponent } from './conversao-de-juros/conversao-de-juros.component';
import { Formula1Component } from './formula1/formula1.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { CsvFileInputComponent } from './csv-file-input/csv-file-input.component';
import { WaccComponent } from './wacc/wacc.component';
import { TimeValueMoneyComponent } from './time-value-money/time-value-money.component';
import { CustoAcoesAlavancadasComponent } from './custo-acoes-alavancadas/custo-acoes-alavancadas.component';
import { CapmComponent } from './capm/capm.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { CalculoJuros } from './calculo-juros/calculo-juros.component';
import { InformacaoDeSeguro } from './informacao-de-seguro/informacao-de-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversaoDeJurosComponent,
    Formula1Component,
    MeuComponenteComponent,
    CsvFileInputComponent,
    WaccComponent,
    TimeValueMoneyComponent,
    CustoAcoesAlavancadasComponent,
    CapmComponent,
    HomeComponent,
    CalculoJuros,
    InformacaoDeSeguro
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'conversao-de-juros', component: ConversaoDeJurosComponent },
      { path: 'wacc', component: WaccComponent },
      { path: 'time-value-money', component: TimeValueMoneyComponent },
      { path: 'custo-acoes-alavancadas', component: CustoAcoesAlavancadasComponent },
      { path: 'capm', component: CapmComponent },
      { path: 'calculo-juros', component: CalculoJuros },
      { path: 'informacao-de-seguro', component: InformacaoDeSeguro }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
