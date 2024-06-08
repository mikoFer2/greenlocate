import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//declare var google;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  rut: string = '';
  contrasena: string = '';

//  map = null;
  
  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if(extras?.extras.state){
      this.rut = extras?.extras.state['rut'];
      this.contrasena = extras?.extras.state['contrasena'];
    }
    
  }

//  loadMap() {
//    const mapEle: HTMLElement = document.getElementById('map');

//    const myLatLng = {
//      lat: this.marker.position.lat,
//      lng: this.marker.position.lng
//    };

//    this.map = new google.maps.Map(mapEle, {
//      center: myLatLng,
//      zoom: 15
//    });
  
//    google.maps.event.addListenerOnce(this.map, 'idle', () => {
//      this.addMarker(this.marker);
//      mapEle.classList.add('show-map');
//    });
//  }

}
