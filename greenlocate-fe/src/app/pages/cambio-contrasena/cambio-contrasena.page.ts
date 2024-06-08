import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.page.html',
  styleUrls: ['./cambio-contrasena.page.scss'],
})
export class CambioContrasenaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cambiocontrasena(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['login'])
  }
}
