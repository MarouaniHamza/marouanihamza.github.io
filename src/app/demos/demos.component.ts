import { Component } from '@angular/core';
import { DEMOS } from '../models/demos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
})
export class DemosComponent {
  myDemos = DEMOS;

  constructor(private router: Router) {}

  openDemo(path: string) {
    this.router.navigate(['/demos', path], { skipLocationChange: true });
  }
}
