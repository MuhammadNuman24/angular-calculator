import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {
  public a :string ;
  public b :string ;
  result :number;
  
  
    constructor() { }
  
    divide() {
      return this.result = Number.parseInt(this.a.toString()) / Number.parseInt(this.b.toString())
      
    }
    clear(){
      console.log('Hi')
    }


  ngOnInit(): void {
  }

}
