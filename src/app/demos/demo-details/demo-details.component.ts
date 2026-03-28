import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DEMOS } from '../../models/demos';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css'],
})
export class DemoDetailsComponent implements OnInit {
  title!: string;

  listOfDemos = DEMOS;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.title = params['demoPath'];
    });
  }
}
