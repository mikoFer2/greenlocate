import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.page.html',
  styleUrls: ['./mesa.page.scss'],
})
export class MesaPage implements OnInit {

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