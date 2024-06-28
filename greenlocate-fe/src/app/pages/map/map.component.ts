import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
//  standalone: true,
})
export class MapComponent  implements OnInit {

  @ViewChild('map', {static: true}) mapElementRef!: ElementRef;
  center = { lng: -70.745728, lat: -33.54056};
  googleMaps: any;
  map: any;
  marker: any;
  mapListener: any;
  markerListener: any;
  intersectionObserver: any;
  private renderer = inject(Renderer2);

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadMap();
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
