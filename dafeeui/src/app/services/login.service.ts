import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private router:Router) { }
  path = environment.path


  login(loginAdmin: any) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/login',
      loginAdmin, { headers: headers }).subscribe(data => {
        this.tokenKayit(data['token'])
        this.router.navigate(['/home'])
      })
      
  }

  tokenKayit(token) {
    localStorage.setItem("token", token)
  }

  logout() {
    localStorage.removeItem("token")
  }

  get durum(){
    return !!localStorage.getItem("token")
  }

  get token(){
    return localStorage.getItem("token")
  }


}
