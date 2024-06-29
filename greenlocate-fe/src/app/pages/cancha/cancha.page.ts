import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.page.html',
  styleUrls: ['./cancha.page.scss'],
})
export class CanchaPage implements OnInit {

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
