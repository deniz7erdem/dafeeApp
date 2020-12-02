import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiparisComponent } from './siparis.component';

describe('SiparisComponent', () => {
  let component: SiparisComponent;
  let fixture: ComponentFixture<SiparisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiparisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiparisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
