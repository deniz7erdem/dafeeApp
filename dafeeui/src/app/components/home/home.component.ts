import { Component, OnInit } from '@angular/core';
import { MasaService } from 'src/app/services/masa.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private masaService:MasaService, private loginService:LoginService, private router:Router) { }
  masalar:any;
  siparisler;

  ngOnInit(): void {
    if(this.loginService.durum==false){
      this.router.navigate(['/login'])
    }
    this.getMasa();
      this.getSiparisler();

      // setInterval(() => {
      // this.getMasa();
      // this.getSiparisler();
      // }, 1000);
  }

  getMasa(){
    this.masaService.getMasa().subscribe(data=>{
      this.masalar=data;
    })
  }

  getSiparisler(){
    this.masaService.getSiparisler()
      .subscribe(arg => this.siparisler = arg);  
  }


  masaFiyat(masaAdi): number {
    let mfiyat: number = 0;
    for (let siparis of this.siparisler) {
      if (masaAdi === siparis.no) {
        mfiyat = mfiyat + siparis.fiyat;
      }
    }
    return mfiyat;
  }

}
