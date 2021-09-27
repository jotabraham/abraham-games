import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjamComponent } from './kanjam.component';

describe('KanjamComponent', () => {
  let component: KanjamComponent;
  let fixture: ComponentFixture<KanjamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
