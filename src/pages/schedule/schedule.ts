import { Component, ViewChild,ElementRef } from '@angular/core';

import { Platform,AlertController, App,  ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';

import { ISPData } from '../../providers/isp-data';
import { UserData } from '../../providers/user-data';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';


declare var google;


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  @ViewChild('mapCanvas') mapElement: ElementRef;
  map: any;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public ispData: ISPData,
    public user: UserData,
    public platform: Platform,
    public geolocation: Geolocation,
    private iab: InAppBrowser
  ) {
    }

  ionViewDidLoad() {
    this.loadMap();
      this.acService = new google.maps.places.AutocompleteService();        
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };   
  }

 openUrl() {

        this.platform.ready().then(() => {
           const browser = this.iab.create('http://signbase.speedtestcustom.com',"_blank", "location=yes");
           browser.close();

        });
  }

loadMap(){

   this.ispData.getMap().subscribe((mapData: any) => {
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
