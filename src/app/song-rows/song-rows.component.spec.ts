import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRowsComponent } from './song-rows.component';

describe('SongRowsComponent', () => {
  let component: SongRowsComponent;
  let fixture: ComponentFixture<SongRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
