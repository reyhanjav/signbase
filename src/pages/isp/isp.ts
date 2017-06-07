import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform,NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;


@Component({
  selector: 'page-isp',
  templateUrl: 'isp.html'
})
export class ispPage {

  @ViewChild('ISPcanvas') mapElement: ElementRef;
  map: any;
  constructor(public confData: ConferenceData, public platform: Platform,public navCtrl: NavController,public geolocation: Geolocation) {
  }

  ionViewDidLoad() {

      this.confData.getMap().subscribe((mapData: any) => {
        let mapEle = this.mapElement.nativeElement;

        let map = new google.maps.Map(mapEle, {
          center: mapData.find((d: any) => d.center),
          zoom: 16
        });

        mapData.forEach((markerData: any) => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });

  }
}
