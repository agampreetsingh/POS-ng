import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(name: string, password: string) {
    return this.http.post("http://localhost:8080/pos/employee/login",{
      "name": name,
      "password": password 
  });
  }
  
  


}
