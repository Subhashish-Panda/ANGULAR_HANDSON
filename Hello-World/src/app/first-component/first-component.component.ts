import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title:string="Hello Folks!";
  d_name:string="Subhashish Panda";

}