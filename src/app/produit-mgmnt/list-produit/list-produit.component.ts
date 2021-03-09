import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Produit } from 'src/app/models/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/utils/services/produit.service';
import { UserService } from 'src/app/utils/services/user.service';
import { CategorieService } from 'src/app/utils/services/categorie.servise';
import { Categories } from 'src/app/models/categories';
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  produits: Produit[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject();
  produit: Produit;
  cats: Categories[] = [];
  cat: Categories;
  categorie: Categories = new Categories();
  constructor(private categorieService: CategorieService, private userService: UserService,
    private produitService: ProduitService, private r: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)) {

      this.produitService.getProduitsList().subscribe(
        res => {
         // Swal.fire('This is a simple and sweet alert')
          console.log(res);
          this.produits = res;
          console.log(res);
          //  this.produit.categorie.nomC;
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
          //this.setcategorie(2);
          this.currentajout = this.produit;
           this.displayBasic2 = true
          /*if (this.produits) {
            
            alert("Edit avec succès du produit ");
          }*/
        });
    }
    else 
    {
      
      this.produitService.getProduitsList().subscribe(
        res => {
          console.log(res);
          this.produits = res;
          console.log(res);
          //  this.produit.categorie.nomC;
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
          //this.setcategorie(2);
        
        });
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  setcategorie(id: number) {
    this.categorieService.getCategorieById(id).subscribe(
      res => {
        this.cat = res;
        // Calling the DT trigger to manually render the table
        console.log(this.cat);
        console.log(res);
        console.log(res.nomC);

      });
  }

  delete(p: Produit) {
    if (window.confirm("êtes-vous sûr suprrimer le produit " + p.nom + " ?")) {
      this.produitService.deleteProduit(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.produitService.getProduitsList().subscribe(res => {
          this.produits = res;

          // rerender datatable
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
          });

        });


      })

    }
  }


  details(u: Produit) {
    this.currentProduit = u;
    this.displayBasic = true;
  }

  modifier(u: Produit) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/edit-produit/' + u.id]);
    console.log(u);

    // }

  }

  displayBasic: boolean;
  displayBasic2: boolean;
  currentProduit: Produit;
  currentajout: Produit;


  ajouter() {
    this.r.navigate(['/add-produit/']);
  }

  
}
