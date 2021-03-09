import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/models/categories';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/utils/services/produit.service';
import { CategorieService } from 'src/app/utils/services/categorie.servise';

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit.component.html',
  styleUrls: ['./form-produit.component.scss']
})
export class FormProduitComponent implements OnInit {

  categorie: Categories[] = [];
  produits: Produit[] = [];
  cat : Categories;
  u: Produit = new Produit();

  registerForm: FormGroup;
  submitted = false;


  constructor(private produitService: ProduitService,private categorieService: CategorieService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.categorieService.getCategoriesList().subscribe(res => {
      this.categorie = res;
      // Calling the DT trigger to manually render the table
       console.log(this.categorie);
      console.log(res);

    });
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
      idCategorie: ['', Validators.required],

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

    this.produitService.addProduit(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new Produit();
    });
  }

  // display form values on success
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
 


}




