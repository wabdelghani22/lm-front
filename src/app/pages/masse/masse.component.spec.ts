import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasseComponent } from './masse.component';

describe('MasseComponent', () => {
  let component: MasseComponent;
  let fixture: ComponentFixture<MasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
