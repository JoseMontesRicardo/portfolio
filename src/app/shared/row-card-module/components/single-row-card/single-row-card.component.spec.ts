import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRowCardComponent } from './single-row-card.component';

describe('SingleRowCardComponent', () => {
  let component: SingleRowCardComponent;
  let fixture: ComponentFixture<SingleRowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
