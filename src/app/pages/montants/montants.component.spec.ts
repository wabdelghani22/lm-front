import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontantsComponent } from './montants.component';

describe('MontantsComponent', () => {
  let component: MontantsComponent;
  let fixture: ComponentFixture<MontantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MontantsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
