import { Component, OnInit } from '@angular/core';
import {CarmakeService} from '../../services/helper/carmake.service';
import { Carmake } from '../../domain/Carmake';
import { Carmodel } from '../../domain/carmodel';
import {Carad } from '../../models/Carad';
import {CarAdService} from '../../services/car-ad.service';
import {UploadImageService} from '../../services/upload-image.service';
@Component({
  selector: 'app-submit-car-add',
  templateUrl: './submit-car-add.component.html',
  styleUrls: ['./submit-car-add.component.css']
})
export class SubmitCarAddComponent implements OnInit {
allCarmake: Carmake[]; 
 modelarray: Carmodel[]=[];
 modellist: Carmodel[];
 cartransmission :  Map<String,String>;
 modelListMap : Map<String, Carmodel[]>;
private carad:Carad = new Carad();
  constructor(private carmakeService: CarmakeService, private carAdService :CarAdService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
   this.allCarmake = this.carmakeService.getCarmake();
//console.log('allCarmake on init '+ JSON.stringify(this.allCarmake));
    this.cartransmission=this.carmakeService.getTransmission()
  }

  onSubmit(){
  
   this.carAdService.sendAd(this.carad).subscribe(
    res=>{
   this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
    console.log('Succes' + JSON.stringify(res));
    },
    error=>{
    console.log('Error '+ error);
    }

   );
  }

  onMakeChange(makeid){
    console.log('onMakeChange '+ this.carad.make);
    this.modellist=[];
    this.modellist=this.carmakeService.getCarmodel(this.carad.make);
   
    console.log('modellist '+ JSON.stringify(this.modellist));
    return this.modellist;
 }

 

initModel() {
	this.modelarray.push(new Carmodel('civ','Civic'));
	this.modelarray.push(new Carmodel('acc','Accord'));
	this.modelarray.push(new Carmodel('pil','pilot'));
	this.modelListMap.set('hond',this.modelarray);
	this.modelarray=[];
	this.modelarray.push(new Carmodel('cor','Corola'));
	this.modelarray.push(new Carmodel('yar','Yaris'));
	this.modelarray.push(new Carmodel('cam','Camry'));
	this.modelListMap.set('toyo',this.modelarray);
    this.modelarray=[];
    this.modelarray.push(new Carmodel('rio','Rio'));
	this.modelarray.push(new Carmodel('rio','Rio'));
	this.modelarray.push(new Carmodel('rio','Rio'));
	this.modelListMap.set('kia',this.modelarray);
	this.modelarray=[];
}
}
