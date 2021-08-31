import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capm',
  templateUrl: './capm.component.html',
  styleUrls: ['./capm.component.css']
})
export class CapmComponent{
  Rf = 0;
  Beta = 0;
  Rm = 0;
  Ri = 0;
  RiPercent = 0;
  
  calculaCapm(){
    this.Ri = (this.Rf/100) + ( this.Beta * ((this.Rm/100) - (this.Rf/100) ));
    this.RiPercent = this.Ri * 100;
  }

}
