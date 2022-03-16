import { Component, OnInit } from '@angular/core';
import { MyserviceeService } from '../myservicee.service';
@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {
  Employees1:any;
  constructor(private myservice:MyserviceeService) { }

  ngOnInit(): void {
    this.Employees1 = this.myservice.Employees();
  }

}
