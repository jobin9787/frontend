	import { Component, OnInit, ViewChild  } from '@angular/core';
	import { Carad } from '../../models/carad';
	import {CarAdService} from '../../services/car-ad.service';
	import {Params, ActivatedRoute, Router} from '@angular/router';
	import {Http} from '@angular/http';
	import {AppConst} from '../../const/app-const';
    import { DataTable, DataTableResource } from 'angular-4-data-table';
    import {DataSource} from '@angular/cdk/collections';
    import {Observable} from 'rxjs/Observable';
    import 'rxjs/add/observable/of';
 @Component({
	  selector: 'app-carad-list',
	  templateUrl: './carad-list.component.html',
	  styleUrls: ['./carad-list.component.css']
	})


	export class CaradListComponent implements OnInit {
	  public filterQuery = "";
	  public rowsOnPage = 5;
	  private selectedCarad : Carad;
	  private caradList : Carad[];
	 private serverPath:string = AppConst.serverPath;
	  constructor(
	  private carAdService: CarAdService,
	  private router: Router,
	  private http:Http,
	  private route: ActivatedRoute
	  ) { }


	  onSelect(carad:Carad){
	   this.selectedCarad=carad;
       console.log(this.selectedCarad.id);
	   this.router.navigate(['/caradDetail',this.selectedCarad.id]);
	  
	  }


		  ngOnInit() {
		 //this.caradList=  data;

		  this.route.queryParams.subscribe(params => {
		  if(params['caradList']){
			console.log("Filtred car ad list");
			this.caradList=JSON.parse(params['caradList']);
		  } else{
		     this.carAdService.getCaradList().subscribe(
		     res=>{
		     console.log(res.json());
		     this.caradList=res.json()
		    },
		     err=>{
		     console.log(err);
		     }
		 	)
		     }
		   });
		  
		  }

	}


