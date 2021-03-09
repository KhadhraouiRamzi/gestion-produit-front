import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() produit : Produit;

  constructor() { }

  ngOnInit(): void {
  }

}
