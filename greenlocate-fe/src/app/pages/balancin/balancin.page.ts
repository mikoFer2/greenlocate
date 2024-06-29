import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-balancin',
  templateUrl: './balancin.page.html',
  styleUrls: ['./balancin.page.scss'],
})
export class BalancinPage implements OnInit {

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
