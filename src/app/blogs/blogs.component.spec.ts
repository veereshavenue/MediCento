import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BLOGSComponent } from './blogs.component';

describe('BLOGSComponent', () => {
  let component: BLOGSComponent;
  let fixture: ComponentFixture<BLOGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BLOGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BLOGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
