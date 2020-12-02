import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapComponent } from './hesap.component';

describe('HesapComponent', () => {
  let component: HesapComponent;
  let fixture: ComponentFixture<HesapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
