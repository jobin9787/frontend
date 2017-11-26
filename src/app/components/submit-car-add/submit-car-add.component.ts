import { Component, OnInit } from '@angular/core';
import {CarmakeService} from '../../services/helper/carmake.service';
import { Carmake } from '../../domain/Carmake';
import {Carad } from '../../models/Carad';
import {CarAdService} from '../../services/car-ad.service';
@Component({
  selector: 'app-submit-car-add',
  templateUrl: './submit-car-add.component.html',
  styleUrls: ['./submit-car-add.component.css']
})
export class SubmitCarAddComponent implements OnInit {
allCarmake: Carmake[]; 
private carad:Carad = new Carad();
  constructor(private carmakeService: CarmakeService) { }

  ngOnInit() {
   this.allCarmake = this.carmakeService.getCarmake();

  }

  onSubmit(){
     console.log('Profile Changed: '+ this.carad.make );
   
  }

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
