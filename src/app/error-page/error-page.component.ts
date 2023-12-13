import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit{
  
  message!: string;

  constructor(private activateRoute: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.activateRoute.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
  }

}