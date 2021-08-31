import { Component } from '@angular/core';
// @ts-ignore
import  Finance  from '../../../node_modules/tvm-financejs/';

@Component({
  selector: 'app-time-value-money',
  templateUrl: './time-value-money.component.html',
  styleUrls: ['./time-value-money.component.css']
})
export class TimeValueMoneyComponent {

  finance = new Finance();

  presentValue = 0;
  futureValue = 0;
  payments = 0;
  numPeriods = 0;
  rate = 0;
  begin = 0;

  tvmRadio = '';

  calculaValorPresente() {
    this.presentValue = this.finance.PV(this.rate / 100, this.numPeriods, this.payments, this.futureValue, this.begin);
  }

  calculaTaxa() {
    this.rate = this.finance.RATE(this.numPeriods, this.payments, this.presentValue, this.futureValue, this.begin) * 100;
  }

  calculaValorFuturo() {
    this.futureValue = this.finance.FV(this.rate / 100, this.numPeriods, this.payments, this.presentValue, this.begin);
  }

  calculaPagamentos(){
    this.payments = this.finance.PMT(this.rate / 100, this.numPeriods, this.presentValue, this.futureValue, this.begin);
  }

}
