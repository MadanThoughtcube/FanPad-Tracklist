import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuplinkComponent } from './popuplink.component';

describe('PopuplinkComponent', () => {
  let component: PopuplinkComponent;
  let fixture: ComponentFixture<PopuplinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopuplinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopuplinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
