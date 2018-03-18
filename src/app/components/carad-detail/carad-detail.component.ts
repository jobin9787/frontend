import { Component, OnInit } from '@angular/core';
import { Carad } from '../../models/Carad';
import {CarAdService} from '../../services/car-ad.service';
import {AppConst} from '../../const/app-const';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';

import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {GoogleMapService} from '../../services/google-map.service';

@Component({
  selector: 'app-carad-detail',
  templateUrl: './carad-detail.component.html',
  styleUrls: ['./carad-detail.component.css']
})
export class CaradDetailComponent implements OnInit {

private caradId : Number;
private test;
private carad: Carad =new Carad() ;
private fileNumber : number;
private numberList : number[] = [1,2,3,4,5,6,7,8,9];
private serverPath: string = AppConst.serverPath;
private imagesArray: Array<Image> = [];
//Image gallery
  openModalWindow: boolean = false;
  imagePointer: number = 0;
  openModalWindowObservable: boolean = false;
  imagePointerObservable: number = 0;
  private subscription: Subscription;
  private imagesArraySubscription: Subscription;

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

  this.carAdService.getCarad(this.caradId).subscribe(
    res=>{
    this.carad=res.json();
    this.fileNumber= JSON.parse(JSON.stringify(res.json())).fileNumber;
    this.imageInit(this.fileNumber);
    },
     err=>{
     console.log(err)
   }

   );

   this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
      this.imagesArraySubscribed = this.imagesArray;
    });





  };


// Image gallery

	  imageInit(fNumber:number){
	     let init:number = 1;

	   for(let i:number=init;i<=fNumber;i++)
	    {
	    this.imagesArray.push(
	       new Image(
	        this.serverPath+'/image/carad/'+this.caradId+'/'+this.caradId+i+'.png',
	        this.serverPath+'/image/carad/'+this.caradId+'/'+this.caradId+i+'.png',
	        null, // no description
	        null // url
	       )
	      )
	     }
	    }

  // observable of an array of images with a delay to simulate a network request
  images: Observable<Array<Image>> = Observable.of(this.imagesArray).delay(300);

  // array with a single image inside (the first one)
  singleImage: Observable<Array<Image>> = Observable.of([
    new Image(
      '../assets/images/gallery/img1.jpg',
      '../assets/images/gallery/thumbs/img1.jpg',
      'Description 1',
      'http://www.google.com'
    )]
  );

  // array of images initialized inside the onNgInit() of this component
  // in an asynchronous way subscribing to an Observable with a delay.
  // This is not a real use-case, but it's a way to simulate a scenario where
  // you have to subscribe to an Observable to get data and to set public vars
  imagesArraySubscribed: Array<Image>;

  customDescription: Description = {
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customFullDescription: Description = {
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image',
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };





  openImageModal(image: Image) {
    this.imagePointer = this.imagesArray.indexOf(image);
    this.openModalWindow = true;
  }

  openImageModalObservable(image: Image) {
    this.subscription = this.images.subscribe((val: Image[]) => {
      this.imagePointerObservable = val.indexOf(image);
      this.openModalWindowObservable = true;
    });
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    this.customFullDescription.customFullDescription = `Custom description of visible image with index= ${event.result}`;
    console.log('action: ' + Action[event.action]);
    console.log('result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onfirst action: ' + Action[event.action]);
    console.log('onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onlast action: ' + Action[event.action]);
    console.log('onlast result:' + event.result);
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    this.openModalWindow = false;
    this.openModalWindowObservable = false;
  }

  addRandomImage() {
    this.imagesArray.push(this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if(this.imagesArraySubscription) {
      this.imagesArraySubscription.unsubscribe();
    }
  }


}
