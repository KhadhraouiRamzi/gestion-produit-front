import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl: string = "http://localhost:8082";

  constructor(private backend: HttpClient) { }


  getUsersList(): Observable<User[]> {
    return this.backend.get<User[]>(this.baseUrl + "/users");
  }

  
   
  addUser(u: User) {
    return this.backend.post(this.baseUrl + "/new-user", u);
  }
 
  editUser(u: User):Observable<any> {
    return this.backend.put(this.baseUrl + "/updateUsers" , u);
  } 

  detailUser(id) {
    return this.backend.get<User>(this.baseUrl + "/GetOneUser/" + id);
  } 


  deleteUser(id) {
    return this.backend.delete(this.baseUrl + "/deleteUser/" + id);
  }



  getUserById(id) {
    return this.backend.get<User>(this.baseUrl + "/users/by-id/" + id);
  }


}