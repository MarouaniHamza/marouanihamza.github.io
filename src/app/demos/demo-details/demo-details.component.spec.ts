import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDetailsComponent } from './demo-details.component';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';

describe('DemoDetailsComponent', () => {
  let component: DemoDetailsComponent;
  let fixture: ComponentFixture<DemoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDetailsComponent],
      imports: [AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoDetailsComponent);
    fixture.debugElement.injector.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
