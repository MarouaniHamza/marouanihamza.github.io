import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '#app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css'],
})
export class MyPortfolioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/demos'], { skipLocationChange: true });
  }

  goToTab(path: string) {
    this.router.navigate([path], { skipLocationChange: true });
  }
}
