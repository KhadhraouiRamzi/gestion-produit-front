import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/utils/services/categorie.servise';
 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.scss']
})
export class EditCategorieComponent implements OnInit {

  u : Categories ;
  constructor(private categorieService: CategorieService, private router: Router, private ar : ActivatedRoute) { }

  ngOnInit(): void {
   
    let routeId = this.ar.snapshot.paramMap.get('idCategorie');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.categorieService.getCategorieById(id).subscribe(
       response => {this.u = response;
      console.log(response);}
     )

    }else {

    }

  }

  update(u : Categories)
  {
    this.categorieService.editCategorie(u).subscribe(res =>
      {
        this.u=new Categories();

                
        this.router.navigate(['/list-categorie/1']);
        console.log(this.u);
      });
  } 



}
