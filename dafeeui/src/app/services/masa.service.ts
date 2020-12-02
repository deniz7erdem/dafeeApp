import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasaService {

  constructor(private http:HttpClient) { }
  path=environment.path

  getMasa(){
    return this.http.get<any>(this.path+'/masa')
  }
  getSiparisler(){
    return this.http.get<any>(this.path+'/siparisler')
  }
  getUrunler(){
    return this.http.get<any>(this.path+'/urun') 
  }
  getKategori(){
    return this.http.get<any>(this.path+'/kategori')
  }

  //POST
  postSiparis(siparis){
    return this.http.post<any>(this.path+'/siparisler',siparis)
    //return this.http.get<any>(this.path+'/siparisler')
  }

  //DELETE
  delSip(siparis){
    
    let headers = new HttpHeaders
    headers = headers.append("Content-Type","application/json")
    this.http.post(this.path+'/delsip',siparis,{headers:headers}).subscribe()
  }

  hesap(no){
    this.http.post(this.path+'/hesap',no).subscribe()
  }
}
