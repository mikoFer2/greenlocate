import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancha(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['cancha'])
  }

  balancin(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['balancin'])
  }
  
  columpio(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['columpio'])
  }

  maquina(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['maquina'])
  }

  mesa(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['mesa'])
  }

  asiento(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['asiento'])
  }

  pileta(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['pileta'])
  }

  resbalin(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['resbalin'])
  }
}
