import { Component, OnInit, TemplateRef } from '@angular/core';
import { MasaService } from 'src/app/services/masa.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SiparisClass } from './siparis';
import { LoginService } from 'src/app/services/login.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-siparis',
  templateUrl: './siparis.component.html',
  styleUrls: ['./siparis.component.css']
})
export class SiparisComponent implements OnInit {
modalRef:BsModalRef
  constructor(
    private masaService: MasaService,
    private route: ActivatedRoute,
    private location: Location,
    private loginService:LoginService,
    private modalService: BsModalService
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  id;
  siparisler;
  urunler;
  kategoriler;
  masaUrl = window.location.href;
  oneAtATime: boolean = true;


  ngOnInit(): void {
    this.getKategori()
    this.getUrunler()
    this.getSiparis()
  }

  getSiparis() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.masaService.getSiparisler()
      .subscribe(arg => this.siparisler = arg);

  }

  getUrunler() {
    this.masaService.getUrunler()
      .subscribe(arg => this.urunler = arg);
  }
  getKategori() {
    this.masaService.getKategori()
      .subscribe(arg => this.kategoriler = arg);
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

  ekle(urun, fiyat) {
    let no = this.id
    this.masaService.postSiparis({
      no,
      urun,
      fiyat
    } as SiparisClass).subscribe(siparis=>this.siparisler.push(siparis))


  }

  sil(siparis){
    this.masaService.delSip(siparis);
    var index = this.siparisler.indexOf(siparis)
    this.siparisler.splice(index,1)
  }

  durum(){
    return this.loginService.durum
  }

  hesap(no){
   var cevap={
    "no":no
    }
    this.masaService.hesap(cevap)
  }

}
