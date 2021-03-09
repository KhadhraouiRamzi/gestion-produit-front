import { Injectable } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  baseUrl: string = "http://localhost:8082";

  constructor(private backend: HttpClient) { }


  addProduit(u: Produit) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-produit-cat", u);
  }

  editProduit(u: Produit) {
    return this.backend.put(this.baseUrl + "/updateProduit/"  , u);
  }

  editProduit2(u: Produit) {
    return this.backend.put(this.baseUrl + "/updateProduit2" , u);
  }

  detailProduit(id) {
    return this.backend.get<Produit>(this.baseUrl + "/GetOneProduit/" + id);
  }
  deleteProduit(id) {
    return this.backend.delete(this.baseUrl + "/deleteProduit/" + id);
  }
  getProduitById(id) {
    return this.backend.get<Produit>(this.baseUrl + "/produit/by-id/" + id);
  }

  getProduitsList(): Observable<Produit[]> {
    return this.backend.get<Produit[]>(this.baseUrl + "/produits");
  }

  getProduitUser(id: number): Observable<Produit[]> {
    return this.backend.get<Produit[]>(this.baseUrl + "/listProduitUser/" + id);
  }
  /* getTransactionsCompte(idCompte : number) : Transaction[]
    {
      return this.bdd_transactions.filter (tx => tx.idCompte === idCompte);
    }
    */



}