import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatedTestComponent } from './gated-test.component';

describe('GatedTestComponent', () => {
  let component: GatedTestComponent;
  let fixture: ComponentFixture<GatedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatedTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
