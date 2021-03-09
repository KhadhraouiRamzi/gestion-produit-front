import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/utils/services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/utils/services/categorie.servise';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {
  categorie: Categories[] = [];
  u : Produit ;
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
   constructor(private fb: FormBuilder,private categorieService: CategorieService,private produitService: ProduitService, 
    private router: Router, private ar : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.categorieService.getCategoriesList().subscribe(res => {
      this.categorie = res;
      // Calling the DT trigger to manually render the table
       console.log(this.categorie);
      console.log(res);
    
    });
   
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.produitService.getProduitById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
   
    /*
    this.countryForm = this.fb.group({
      countryControl:   this.u.categorie.nomC
    });
    
      this.userInfoForm  = new FormGroup({
        userInfoUserName: new FormControl({ value: '' }, Validators.compose([Validators.required])),
        userInfoName: new FormControl({ value: '' }, Validators.compose([Validators.required])),
        userInfoSurName: new FormControl({ value: '' }, Validators.compose([Validators.required]))
      });*/

    
    this.myGroup = new FormGroup({
      firstName: new FormControl()
   });
 
  }
  
	selectedOption;

  

  update(u : Produit)
  {
    
    this.produitService.editProduit(u).subscribe(res =>
      {
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.router.navigate(['/list-produit/1']);
        console.log('aa' || this.u);
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.u=new Produit();

      });
  } 
  annuler() {
    this.router.navigate(['/list-produit/']);

  }

   changement(evenement) {
    //Evenement contient l'évènement transmis, on peut accéder à la donnée sélectionnée en manipulant l'attribut target
   var objet = this.u.categorie;
}

}
