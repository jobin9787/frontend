import { Injectable } from '@angular/core';
import { Carmake } from '../../domain/carmake';
import { Carmodel } from '../../domain/carmodel';


@Injectable()
export class CarmakeService {

   getCarmake(): Carmake[] {
      let carmake = [
		 new Carmake('hond', 'Honda'),
		 new Carmake('toyo', 'Toyota'),
		 new Carmake('kia', 'Kia')
      ]	 
      return carmake;	  
   };

   getCarmodel( makeid:String):   Carmodel[] {

    console.log('makeid service'+  makeid );
      let carmodelhonda = [
		 new Carmodel('civ','Civic'),
		 new Carmodel('acc','Accord'),
		 new Carmodel('pil','pilot')
      ]	;
   
	let modelMap : Map<String, Carmodel[]> = new Map<String, Carmodel[]>();
	modelMap.set("hond",[
		 new Carmodel('civ','Civic'),
		 new Carmodel('acc','Accord'),
		 new Carmodel('pil','pilot')
      ]);
	 let carmodeltoyota = [
		new Carmodel('cor','Corola'),
		new Carmodel('yar','Yaris'),
		new Carmodel('cam','Camry')
      ]	;

	modelMap.set("toyo",carmodeltoyota);
   let carmodelkia= [
		new Carmodel('rio','Rio'),
		new Carmodel('rio','Rio'),
		new Carmodel('rio','Rio')
      ]	;

    let m = new Map();
	m.set('hond',carmodelhonda);
    m.set('toyo',carmodeltoyota);
    m.set('kia',carmodelkia);

      modelMap.set("kia",carmodelkia);
   var makeidString: string ="'"+ makeid+"'";
      console.log('mmmm get'+  makeidString );
      
       
      return m.get(makeid);	  
   };


  getTransmission(): Map<String,String>{
	

let carTransmission = new Map();
	carTransmission.set('auto','Automatic');
    carTransmission.set('man','Manual');
    carTransmission.set('oth','Other');

 
      return carTransmission;
    }


  constructor() { }



}
