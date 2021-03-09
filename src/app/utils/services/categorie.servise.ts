import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../../models/categories';
import { Produit } from 'src/app/models/produit';

@Injectable({
    providedIn: 'root'
})
export class CategorieService {


    baseUrl: string = "http://localhost:8082";

    constructor(private backend: HttpClient) { }


    addCategorie(c: Categories) {
        return this.backend.post(this.baseUrl + "/new-categorie", c);
    }

    editCategorie(c: Categories) {
        return this.backend.put(this.baseUrl + "/updateCategorie"  , c);
    }

    detailCategorie(id) {
        return this.backend.get<Categories>(this.baseUrl + "/GetOneCategorie/" + id);
    }
    deleteCategorie(idCategorie) {
        return this.backend.delete(this.baseUrl + "/deleteCatgeorie/" + idCategorie);
    }
    getCategorieById(idCategorie) {
        return this.backend.get<Categories>(this.baseUrl + "/categorie/by-id/" + idCategorie);
    }
    getNomById(idCategorie) {
        return this.backend.get<Categories>(this.baseUrl + "/categorie/by-nom/" + idCategorie);
    }
    getCategoriesList(): Observable<Categories[]> {
        return this.backend.get<Categories[]>(this.baseUrl + "/categories");
    }

    getProduitCategorie(id: number): Observable<Categories[]> {
        return this.backend.get<Categories[]>(this.baseUrl + "/listProduitCategorie/" + id);
    }

    getListProduitByCategorieId( id:number) :Observable<Produit[]>{
        return this.backend.get<Produit[]>(this.baseUrl + "/listProduit-by-Categorie/" + id);  
    }
}
