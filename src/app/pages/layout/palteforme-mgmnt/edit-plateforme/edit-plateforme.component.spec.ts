import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlateformeComponent } from './edit-plateforme.component';

describe('EditPlateformeComponent', () => {
  let component: EditPlateformeComponent;
  let fixture: ComponentFixture<EditPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlateformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
