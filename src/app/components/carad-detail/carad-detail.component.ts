import { Component, OnInit } from '@angular/core';
import { Carad } from '../../models/Carad';
import {CarAdService} from '../../services/car-ad.service';
import {AppConst} from '../../const/app-const';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-carad-detail',
  templateUrl: './carad-detail.component.html',
  styleUrls: ['./carad-detail.component.css']
})
export class CaradDetailComponent implements OnInit {

private caradId : number;
private carad: Carad =new Carad() ;
private serverPath = AppConst.serverPath;
private numberList : number[] = [1,2,3,4,5,6,7,8,9];

  constructor(
     	private carAdService:CarAdService,
		private router:Router,
		private http:Http,
		private route:ActivatedRoute
  ) {}

  ngOnInit() {
   
    this.route.params.forEach((params:Params)=>{

     this.caradId= params['id'] ;
   });

console.log("Parse Number--->"+this.caradId)
    this.carAdService.getCarad(this.caradId).subscribe(
    res=>{
    console.log("----> response"+res.json())
    this.carad=res.json();
    },
     err=>{
     console.log(err)
   }

   )

  }

}
