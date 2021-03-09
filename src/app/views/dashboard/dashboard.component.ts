import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProduitService } from 'src/app/utils/services/produit.service';
import {TodosService} from 'src/app/todos/todos.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private produitService : ProduitService, private todosService : TodosService) {}


  kpiTotalUsers = 0;
  kpiTotalTodos = 0;

  ngOnInit() {
    this.produitService.getProduitsList().subscribe(res=>this.kpiTotalUsers=res.length);
    this.todosService.listTodos().subscribe(res=>this.kpiTotalTodos=res.length);
  }
}
