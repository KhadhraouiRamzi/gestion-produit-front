import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/utils/services/categorie.servise';

@Component({
  selector: 'app-form-categorie',
  templateUrl: './form-categorie.component.html',
  styleUrls: ['./form-categorie.component.scss']
})
export class FormCategorieComponent implements OnInit {

  c: Categories = new Categories();

  registerForm: FormGroup;
  submitted = false;
  constructor(private categorieService: CategorieService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nomC: ['', Validators.required],

      acceptTerms: [false, Validators.requiredTrue]
    })
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.submitted = true;

    this.categorieService.addCategorie(this.c).subscribe(res => {
      alert("ajout avec succès !");
      this.c = new Categories();
      console.log(this.c);
    });
  }



  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}



