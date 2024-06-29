import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.page.html',
  styleUrls: ['./maquina.page.scss'],
})
export class MaquinaPage implements OnInit {

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
