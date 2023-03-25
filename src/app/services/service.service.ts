import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  Enroll(title:string)
  {
    alert('you enroll '+title)
    
  }
}
