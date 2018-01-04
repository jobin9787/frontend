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


const data: Carad[] = [
	  {id: '1', make: 'Hydrogen', model: '1.0079', body: 'H',type:'',
	   year:2009,price:222,kilometers:222, fuel: '',iduser:'',adtitle:'test 1',descr:'ddd', adlocation:'',address:'',phone:'',email: 'test@test.ca',adtype:'sold', soldby:'owner',trans:'',color:'bleu',
	   drivetrain:'', doorNo:''
	  },
	 {id: '2', make: 'Helium', model: '4.0026', body: 'He',type:'',
	   year:2009,price:222,kilometers:222, fuel: '',iduser:'',adtitle:'test 1',descr:'ddd', adlocation:'',address:'',phone:'',email: 'test@test.ca',adtype:'sold', soldby:'owner',trans:'',color:'bleu',
	   drivetrain:'', doorNo:''
	  },
	  {id: '3', make: 'Lithium', model: '6.941', body: 'Li',type:'',
	   year:2009,price:222,kilometers:222, fuel: '',iduser:'',adtitle:'test 1',descr:'ddd', adlocation:'',address:'',phone:'',email: 'test@test.ca',adtype:'sold', soldby:'owner',trans:'',color:'bleu',
	   drivetrain:'', doorNo:''
	  },
	  {id: '4', make: 'Beryllium', model: '9.0122', body: 'Be',type:'',
	   year:2009,price:222,kilometers:222, fuel: '',iduser:'',adtitle:'test 1',descr:'ddd', adlocation:'',address:'',phone:'',email: 'test@test.ca',adtype:'sold', soldby:'owner',trans:'',color:'bleu',
	   drivetrain:'', doorNo:''
	  },
	  {id: '5', make: 'Boron', model: '10.811', body: 'B',type:'',
	   year:2009,price:222,kilometers:222, fuel: '',iduser:'',adtitle:'test 1',descr:'ddd', adlocation:'',address:'',phone:'',email: 'test@test.ca',adtype:'sold', soldby:'owner',trans:'',color:'bleu',
	   drivetrain:'', doorNo:''
	  }

	];


