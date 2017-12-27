import { Component, OnInit } from '@angular/core';
import { Carad } from '../../models/carad';
import {CarAdService} from '../../services/car-ad.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {AppConst} from '../../const/app-const';
@Component({
  selector: 'app-carad-list',
  templateUrl: './carad-list.component.html',
  styleUrls: ['./carad-list.component.css']
})
export class CaradListComponent implements OnInit {
  public filterQuery = "";


  constructor() { }

  ngOnInit() {
  }

}
