import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  salir(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['login'])
  }
  registrarse(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['login'])
  }
}
