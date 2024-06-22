
declare var google: any;


import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
//import { MapComponent } from './map/inicio.page';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
    standalone: true,
    //imports: [MapComponent],
})
export class InicioPage implements OnInit {

    @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
    center = { lng: -70.745728, lat: -33.54056};
    googleMaps: any;
    map: any;
    marker: any;
    mapListener: any;
    markerListener: any;
    intersectionObserver: any;
    private renderer = inject(Renderer2);

    rut: string = '';
    contrasena: string = '';

    constructor(private router: Router) { }

    ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if (extras?.extras.state) {
        this.rut = extras?.extras.state['rut'];
        this.contrasena = extras?.extras.state['contrasena'];
    }

    }

    async loadMap(){
        const { Map } = await google.maps.importLibrary("maps");

        const mapEl = this.mapElementRef.nativeElement;

        const location = new google.maps.LatLng(this.center.lat, this.center.lng);

        this.map = new Map(mapEl, {
            center: location,
            zoom: 14,
            mapId: "4504f8b37365c3d0",
        });

        this.renderer.addClass(mapEl, 'visible');
    }
}