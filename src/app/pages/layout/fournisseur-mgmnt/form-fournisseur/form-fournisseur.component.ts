import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';
import { fournisseur } from '../../../../models/fournisseur';
import { FournisseurService } from '../../../../utils/services/fournisseur.service';

@Component({
  selector: 'ngx-form-fournisseur',
  templateUrl: './form-fournisseur.component.html',
  styleUrls: ['./form-fournisseur.component.scss']
})
export class FormFournisseurComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: fournisseur = new fournisseur();
   
  fournisseur: fournisseur[] = [];
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  constructor(private formBuilder: FormBuilder ,private fournisseurService : FournisseurService) { }

  ngOnInit(): void {
    
    this.fournisseurService.getlistFournisseur().subscribe(res => {
      this.fournisseur = res;
      // Calling the DT trigger to manually render the table
      console.log(this.fournisseur);
      console.log(res);

    });
    
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      datef: ['', Validators.required],
      montant: ['', Validators.required],
      part: ['', Validators.required],
        
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

    this.fournisseurService.addFournisseur(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new fournisseur();
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }




}
