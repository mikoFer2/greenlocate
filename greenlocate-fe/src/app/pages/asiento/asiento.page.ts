import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.page.html',
  styleUrls: ['./asiento.page.scss'],
})
export class AsientoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['busqueda'])
  }
}
