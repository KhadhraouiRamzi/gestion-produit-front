import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getUser(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listUser");
  }

  getlistUser(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/users");
  }

  addUser(u: user) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-user", u);
  }

  editUser(u: user) {
    return this.backend.put(this.baseUrl + "/updateUser/", u);
  }

  editUser2(u: user) {
    return this.backend.put(this.baseUrl + "/updateUser", u);
  }

  detailUser(id) {
    return this.backend.get<user>(this.baseUrl + "/GetOneUser/" + id);
  }
  deleteUser(id) {
    return this.backend.delete(this.baseUrl + "/deleteUser/" + id);
  }
  
  getUserById(id) {
    return this.backend.get<user>(this.baseUrl + "/user/by-id/" + id);
  }
}