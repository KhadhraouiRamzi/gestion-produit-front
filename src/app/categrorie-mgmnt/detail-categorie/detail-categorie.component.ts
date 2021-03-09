import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.scss']
})
export class DetailCategorieComponent implements OnInit {

  @Input() Categories : Categories;

  constructor() { }

  ngOnInit(): void {
  }

}
