import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
 title='angular'
  constructor() { }

  ngOnInit(): void {
  }
  onEnroll()
  {
    const enrollservice=new ServiceService()
    enrollservice.Enroll(this.title)
  }

}
