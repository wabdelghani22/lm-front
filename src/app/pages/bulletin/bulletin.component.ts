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
  constructor(public apiService : ApiService, private route : ActivatedRoute) {


   
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      console.log('>>>> params '+params);
      this.matricule = params['matricule'];
    })
    console.log(">>>>>>"+this.matricule)
    this.apiService.getBPDetails(this.matricule).subscribe(data =>{
      this.bpdetail =  data; 
    });
    console.log(">>>>>>>"+this.bpdetail);
  }

}
