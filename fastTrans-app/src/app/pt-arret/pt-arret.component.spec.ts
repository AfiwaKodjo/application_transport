import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtArretComponent } from './pt-arret.component';

describe('PtArretComponent', () => {
  let component: PtArretComponent;
  let fixture: ComponentFixture<PtArretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtArretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtArretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
