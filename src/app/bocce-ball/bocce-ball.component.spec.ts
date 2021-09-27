import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocceBallComponent } from './bocce-ball.component';

describe('BocceBallComponent', () => {
  let component: BocceBallComponent;
  let fixture: ComponentFixture<BocceBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BocceBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BocceBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
