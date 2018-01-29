import { Injectable } from '@angular/core';
import {Carad} from '../models/carad';
import {Http,Headers} from '@angular/http';
import {AppConst} from '../const/app-const';
import {Observable} from 'rxjs/Observable';
import { Search } from '../models/search';
@Injectable()
export class CarAdService {

constructor(private http:Http) {}
  private serverPath:string = AppConst.serverPath;


    sendAd(carad:Carad) {
  	let url = this.serverPath+'/carad/add';
   
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
      console.log("Send car ad" + JSON.stringify(carad));
    return this.http.post(url, JSON.stringify(carad), {headers: headers});
  }

    getCaradList(){
    let url = this.serverPath+'/carad/caradList';
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
 
    return this.http.get(url, {headers: headers});
  }


    getCarad(id: Number){
      let url = this.serverPath+"/carad/"+id;
      console.log("----> url "+url);
	    let headers = new Headers ({
	    'Content-Type':'application/json',
	    'x-auth-token':localStorage.getItem('xAuthToken')
       });
     
       return this.http.get(url, {headers:headers});
     }

    searchCarad(keyword:string){
    let url = this.serverPath+'/carad/searchCaradKey';
   	let headers = new Headers ({
	  'Content-Type':'application/json',
	  'x-auth-token':localStorage.getItem('xAuthToken')
     });
    return this.http.post(url,keyword, {headers:headers});
   }


   sendAdSearch(search:Search){
    let url = this.serverPath+'/carad/searchCarad/key';
    let headers = new Headers ({
    'Content-Type':'application/json',
    'x-auth-token':localStorage.getItem('xAuthToken')
     });
   
     return this.http.post(url,search, {headers:headers});
   }

}
