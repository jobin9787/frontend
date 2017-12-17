import { Injectable } from '@angular/core';
import {AppConst} from '../const/app-const';


@Injectable()
export class UploadImageService {
private serverPath : string =AppConst.serverPath;
 filesToUpload: Array<File>;
  constructor() {
  this.filesToUpload=[]; 
  }

upload(adId:string){
	 
  	this.makeFileRequest("http://localhost:8181/carad/add/image?id="+adId, [], this.filesToUpload).then((result) => {
  		console.log(result);
  	}, (error) => {
  		console.log(error);
  	});
  }

    fileChangeEvent(fileInput: any) {
  	//this.filesToUpload = <Array<File>> fileInput.target.files;
    this.filesToUpload.push(fileInput.target.files) ;
    console.log(this.filesToUpload);
  }


    makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
  	return new Promise((resolve, reject) => {
  		var formData:any = new FormData();
  		var xhr = new XMLHttpRequest();
  		for(var i=0; i<files.length;i++) {
  			formData.append("uploads[]", files[i], files[i].name);
  		}
  		xhr.onreadystatechange = function() {
  			if(xhr.readyState == 4) {
  				if(xhr.status==200) {
  					console.log("image uploaded successfully!");
  				} else {
  					reject(xhr.response);
  				}
  			}
  		}

  		xhr.open("POST", url, true);
  		xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
  		xhr.send(formData);
  	});
  }

}


