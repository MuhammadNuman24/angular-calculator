import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public a :number;
  public b :number;
  result :number;
  constructor() { }

  Add () {
    return this.result = Number.parseInt(this.a.toString()) + Number.parseInt(this.b.toString())
  }
  clear(){
    return this.result=this.a=this.b=0
  }
 ngOnInit(): void {
  }

}
