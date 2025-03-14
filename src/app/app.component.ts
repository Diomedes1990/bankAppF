import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
  ];

  public labels = ['Contactos', 'Sucursales'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // alert('hey');
    // if (this.router.getCurrentNavigation() != null) {
    //   if (this.router.getCurrentNavigation().extras.state) {
    this.appPages = [
      {
        title: 'Mis productos',
        url: '/products',
        icon: 'mail'
      },
      {
        title: 'Transacciones',
        url: '/transacciones',
        icon: 'paper-plane'
      },
      {
        title: 'Ofertas',
        url: '/ofertas',
        icon: 'heart'
      },
      {
        title: 'Configuracion',
        url: '/configuracion',
        icon: 'trash'
      }
    ];
    //   } else {
    //     this.router.navigate(['/login']);
    //   }
    // }



    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    const pathP = window.location.pathname.split('products/')[1];
    if (pathP !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === pathP.toLowerCase());
    }
  }
}
