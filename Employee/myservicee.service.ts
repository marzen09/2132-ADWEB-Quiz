import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceeService {

  constructor() { }
  Employees(){
    return[
      {id:101,firstname:'Marzen Alexis',lastname:'Tumali',email:'motumali@student.hau.edu.ph'},
      {id:102,firstname:'James',lastname:'Atienza',email:'jatienza@hau.edu.ph'},
      {id:103,firstname:'John',lastname:'Cena',email:'jcena@hau.edu.ph'},
      {id:104,firstname:'Robert',lastname:'Quintana',email:'rquintana@hau.edu.ph'},
      
    ]
  }
}
