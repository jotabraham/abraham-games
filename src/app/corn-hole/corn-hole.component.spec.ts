import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornHoleComponent } from './corn-hole.component';

describe('CornHoleComponent', () => {
  let component: CornHoleComponent;
  let fixture: ComponentFixture<CornHoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornHoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
