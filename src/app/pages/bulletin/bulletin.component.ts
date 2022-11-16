import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {
  bpdetail: any = [];
  matricule;
  bulletin;
  contrat;
  constructor(public apiService : ApiService, private route : ActivatedRoute) {


   
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      console.log('>>>> params '+params);
      this.matricule = params['matricule'];
      this.bulletin = params['bulletin'];
      this.contrat = params['contrat'];
    })
    console.log(">>>>>>"+this.matricule)
    console.log(">>>>>>"+this.bulletin)
    console.log(">>>>>>"+this.contrat)
    this.apiService.getBPDetails(this.matricule,this.bulletin , this.contrat).subscribe(data =>{
      this.bpdetail =  data; 
    });
    console.log(">>>>>>>"+this.bpdetail);
  }

}
