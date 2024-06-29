import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-resbalin',
  templateUrl: './resbalin.page.html',
  styleUrls: ['./resbalin.page.scss'],
})
export class ResbalinPage implements OnInit {

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
