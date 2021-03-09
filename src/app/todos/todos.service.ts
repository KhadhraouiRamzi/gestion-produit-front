import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  baseUrl : string = "http://localhost:8081";

  constructor(private backend : HttpClient) { }

  listTodos()
  {
    return this.backend.get<any[]>(this.baseUrl+"/listTodos");
  }
}
