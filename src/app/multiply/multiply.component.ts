import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import { empty } from 'rxjs';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {
  public a: number;
  public b: number;
  result: number;


  constructor() { }

  multiply() {
    return this.result = Number.parseInt(this.a.toString()) * Number.parseInt(this.b.toString())

  }
  clear() {
 
  }

  ngOnInit(): void {
  }

}
