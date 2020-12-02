import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasaService } from 'src/app/services/masa.service';

@Component({
  selector: 'app-hesap',
  templateUrl: './hesap.component.html',
  styleUrls: ['./hesap.component.css']
})
export class HesapComponent implements OnInit {

  constructor(private route:ActivatedRoute,private masaService:MasaService) { }
   id;
   siparisler;
  ngOnInit(): void {
  }
  getSiparis() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.masaService.getSiparisler()
      .subscribe(arg => this.siparisler = arg);

  }
}
