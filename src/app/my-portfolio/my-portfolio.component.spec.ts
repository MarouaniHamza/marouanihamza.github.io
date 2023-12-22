import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioComponent } from './my-portfolio.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../routing/app-routing.module';

describe('MyPortfolioComponent', () => {
  let component: MyPortfolioComponent;
  let fixture: ComponentFixture<MyPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPortfolioComponent],
      imports: [AppRoutingModule],
      providers: [Router],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPortfolioComponent);
    fixture.debugElement.injector.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
