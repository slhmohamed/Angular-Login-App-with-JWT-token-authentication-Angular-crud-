import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsreptionComponent } from './insreption.component';

describe('InsreptionComponent', () => {
  let component: InsreptionComponent;
  let fixture: ComponentFixture<InsreptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsreptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsreptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
