import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

import { IonicStorageModule } from '@ionic/storage';
import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { SupportPage } from '../pages/support/support';
import { ConferenceData } from '../providers/conference-data';
import { ISPData } from '../providers/isp-data';
import { UserData } from '../providers/user-data';
import { UserDataProvider } from '../providers/userdata/user-data';
import { LocationsProvider } from '../providers/locations';
import { SpeedtestPage } from '../pages/speedtest/speedtest';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    IntroPage,
    SupportPage,
    SpeedtestPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: IntroPage, name: 'Intro', segment: 'intro' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: SpeedtestPage, name:'Speedtest', segment: 'speedtest'}
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    IntroPage,
    SpeedtestPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    ISPData,
    UserData,
    UserDataProvider,
    InAppBrowser,
    Network,
    SplashScreen,
    Geolocation,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationsProvider,
  ]
})
export class AppModule { }
