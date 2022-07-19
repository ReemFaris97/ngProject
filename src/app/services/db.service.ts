import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  getAll(){
    return ['عربى' , 'كيمياء' , 'انجلش'];
  }
}
