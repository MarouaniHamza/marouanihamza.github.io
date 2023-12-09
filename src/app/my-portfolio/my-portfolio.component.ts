import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {DEMOS } from '../models/demos';

@Component({
  selector: '#app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css'],
})
export class MyPortfolioComponent {
  
  myPortFolioDemos = DEMOS;

  constructor(private router: Router){

  }

  openDemo(path: string){
    this.router.navigate(['/demo-details', path], {skipLocationChange: true});
  }

}
