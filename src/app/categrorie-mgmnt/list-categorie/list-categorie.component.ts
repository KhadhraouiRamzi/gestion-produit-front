import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { CategorieService } from 'src/app/utils/services/categorie.servise';

import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/models/categories';
@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  cats: Categories[] = [];
  cat: Categories;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject();

  constructor(private categorieService: CategorieService, private r: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)) {

      this.categorieService.getCategoriesList().subscribe(res => {
        this.cats = res;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
        console.log(this.cats);
        console.log(res);
        if (this.cats) {
          alert("Edit avec succès du catégorie ");

        }

      });
    }
    else {
      this.categorieService.getCategoriesList().subscribe(res => {
        this.cats = res;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
        console.log(this.cats);
        console.log(res);
      });


    }
  }

    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

    delete (c: Categories) {
      if (window.confirm("êtes-vous sûr suprrimer la Catégorie : " + c.nomC + " ?")) {
        this.categorieService.getListProduitByCategorieId(c.idCategorie).subscribe(
          res => {
            if (res.length > 0) {
              console.log(res.length);
              alert("Vous avez deja des produits créer par cette catégorie , \nprière de supprimer d'abord ces prouits !! ")
            }
            else {
              this.categorieService.deleteCategorie(c.idCategorie).subscribe(res => {

                this.categorieService.getCategoriesList().subscribe(res => {
                  this.cats = res;
                  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                    dtInstance.destroy();
                    this.dtTrigger.next();
                  });

                });


              })

            }
          }
        );



      }
    }



    details(u: Categories) {
      this.currentCategorie = u;
      this.displayBasic = true;
    }

    modifier(u: Categories) {

      {
        this.r.navigate(['/edit-categorie/' + u.idCategorie]);
        console.log(u);
        u = new Categories();


      }

    }

    displayBasic: boolean;
    currentCategorie: Categories;

    ajouter() {
      this.r.navigate(['/add-categorie/']);
    }
  }

