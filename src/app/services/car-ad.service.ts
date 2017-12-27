import { Injectable } from '@angular/core';
import {Carad} from '../models/carad';
import {Http,Headers} from '@angular/http';
import {AppConst} from '../const/app-const';

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

    listAllCarad(){
    let url = this.serverPath+'/carad/list';
      
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
 
    return this.http.get(url, {headers: headers});
  }


    getCarad(id: Number){

   let url = this.serverPath+"/carad/"+id;
	let headers = new Headers ({
	'Content-Type':'application/json',
	'x-auth-token':localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers:headers});
  }


}
