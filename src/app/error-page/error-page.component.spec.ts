import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageComponent } from './error-page.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { ActivatedRoute } from '@angular/router';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
      imports: [AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPageComponent);
    fixture.debugElement.injector.get(ActivatedRoute);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
