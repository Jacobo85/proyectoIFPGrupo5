import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-aplicacion',
  templateUrl: './navbar-aplicacion.component.html',
  styleUrl: './navbar-aplicacion.component.css'
})
export class NavbarAplicacionComponent {

  constructor(private router:Router){}

  irHome(){
    this.router.navigate([""])
  }

}
