import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent{

  constructor(private router:Router){}

  irAplicaion(){
    this.router.navigate(["/aplicacion"])
  }

}
