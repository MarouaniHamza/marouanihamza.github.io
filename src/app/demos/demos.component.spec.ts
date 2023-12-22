import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosComponent } from './demos.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { Router } from '@angular/router';
import { DemoDetailsComponent } from './demo-details/demo-details.component';

describe('DemosComponent', () => {
  let component: DemosComponent;
  let fixture: ComponentFixture<DemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemosComponent, DemoDetailsComponent],
      imports: [AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DemosComponent);
    fixture.debugElement.injector.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
