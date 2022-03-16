import { Component, OnInit } from '@angular/core';
import { MyserviceeService } from '../myservicee.service';
@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {
  Employees3:any;
  constructor(private myservice:MyserviceeService) { }

  ngOnInit(): void {
    this.Employees3 = this.myservice.Employees();
  }

}