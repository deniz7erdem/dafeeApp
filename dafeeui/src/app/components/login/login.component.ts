import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService:LoginService, private router:Router) { }
  loginAdmin:any={}

  ngOnInit(): void {
    if(this.loginService.durum==true){
      this.router.navigate(['/home'])
    }
  }
  login(loginAdmin){

    this.loginService.login(loginAdmin)
  }
  durum(){
    
    return this.loginService.durum
  }

}
