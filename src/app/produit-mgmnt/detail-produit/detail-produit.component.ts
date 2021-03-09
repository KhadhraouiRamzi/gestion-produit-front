import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  @Input() produit : Produit;


  constructor() { }

  ngOnInit(): void {
  }

}
