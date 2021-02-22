import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent implements OnInit {
  public a: number = 0;
  public b: number = 0;
  result: number = 1;

  constructor() { }
  subtract() {
    return this.result = Number.parseInt(this.a.toString()) -  Number.parseInt(this.b.toString())
  }
  clear() {
    return this.result = 0 
  
  }

  ngOnInit(): void {

  }

}
