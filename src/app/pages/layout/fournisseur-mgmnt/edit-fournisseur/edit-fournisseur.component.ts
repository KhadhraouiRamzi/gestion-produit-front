import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { fournisseur } from '../../../../models/fournisseur';
import { FournisseurService } from '../../../../utils/services/fournisseur.service';

@Component({
  selector: 'ngx-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.scss']
})
export class EditFournisseurComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : fournisseur;
  fournisseur : fournisseur[] =[];
  constructor(private fournisseurService : FournisseurService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.fournisseurService.getFournisseurById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
   
}
 
  update(u : fournisseur)
  {
 
    this.fournisseurService.editFournisseur(u).subscribe(res =>
      {
        alert("Edit avec succès d'album "+this.u.nom+" !");
        this.router.navigate(['/pages/layout/list-fournisseur']);
        console.log('aa' || this.u);
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.u=new fournisseur();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/layout/list-fournisseur/']);

  } 
}
