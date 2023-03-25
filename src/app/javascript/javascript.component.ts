import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  title='javaScript'
  constructor() { }

  ngOnInit(): void {
  }
  onEnroll()
  {
   const enrillservice=new  ServiceService()
   enrillservice.Enroll(this.title)
  }

}
