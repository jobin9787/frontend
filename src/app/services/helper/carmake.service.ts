import { Injectable } from '@angular/core';
import { Carmake } from '../../domain/carMake'

@Injectable()
export class CarmakeService {

CarmakeService

   getCarmake(): Carmake[] {
      let carmake = [
		 new Carmake('hond', 'Honda'),
		 new Carmake('toyo', 'Toyota'),
		 new Carmake('kia', 'Kia')
      ]	 
      return carmake;	  
   }
  constructor() { }

}
