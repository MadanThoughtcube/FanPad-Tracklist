import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionPageComponent } from './data-collection-page.component';

describe('DataCollectionPageComponent', () => {
  let component: DataCollectionPageComponent;
  let fixture: ComponentFixture<DataCollectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCollectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
