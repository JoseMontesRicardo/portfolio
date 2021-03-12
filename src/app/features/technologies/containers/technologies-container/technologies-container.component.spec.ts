import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesContainerComponent } from './technologies-container.component';

describe('TechnologiesContainerComponent', () => {
  let component: TechnologiesContainerComponent;
  let fixture: ComponentFixture<TechnologiesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
