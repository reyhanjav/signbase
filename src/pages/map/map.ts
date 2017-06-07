import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform,NavController,ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

declare var google;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
excludeTracks: any = [];
  @ViewChild('mapCanvas') mapElement: ElementRef;
  map: any;
    
    
  constructor(public confData: ConferenceData, public platform: Platform,public navCtrl: NavController,public geolocation: Geolocation,private iab: InAppBrowser,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }
    
loadMap(){

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
   
 openUrl() {

        this.platform.ready().then(() => {
           const browser = this.iab.create('http://signbase.speedtestcustom.com',"_blank", "location=yes");
           browser.close();

        });
  } 
    

   
  presentFilter() {
    let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
      }
    });

  }
   
}
