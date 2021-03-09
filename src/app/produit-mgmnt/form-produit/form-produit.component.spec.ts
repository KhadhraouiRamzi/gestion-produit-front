import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProduitComponent } from './form-produit.component';

describe('FormProduitComponent', () => {
  let component: FormProduitComponent;
  let fixture: ComponentFixture<FormProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
