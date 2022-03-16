import { Component, OnInit } from '@angular/core';
import { MyserviceeService } from '../myservicee.service';
@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {
  Employees2:any;
  constructor(private myservice:MyserviceeService) { }

  ngOnInit(): void {
    this.Employees2 = this.myservice.Employees();
  }

}
