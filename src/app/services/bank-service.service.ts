import { AppComponent } from './../app.component';
import { UserPersist } from './../models/user-persist';
import { UserLogin } from './../models/user-login';
import { Accounts } from './../models/accounts';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { CreditCards } from '../models/credit-cards';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  LoginformData: UserLogin;
  userPersist: UserPersist;
  readonly rootURL = 'https://bhdleonfrontend-test.herokuapp.com/';
  body = new URLSearchParams();
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  info = null;

  navigationExtras: NavigationExtras = {
    state: {
      accessToken: ''
    }
  };

  constructor(private http: HttpClient, private router: Router, private appComponent: AppComponent) { }

 // readonly accountURL = 'https://api.myjson.com/bins/5z3n8';
//  readonly cardURL = 'https://api.myjson.com/bins/mj5z8';
  accounts: Accounts[];
  creditCards: CreditCards[];

  // Manage Products
  getAccounts(autorization: string) {
    this.options = {
      headers: new HttpHeaders().set('authorization', 'Bearer ' + autorization)
    };
    this.http.get(this.rootURL + 'products/accounts', this.options)
      .toPromise().then(res => this.accounts = res as Accounts[]);
  }

  getCards(autorization: string) {
    this.options = {
      headers: new HttpHeaders().set('authorization', 'Bearer ' + autorization)
    };
    this.http.get(this.rootURL + 'products/credit_cards', this.options)
      .toPromise().then(res => this.creditCards = res as CreditCards[]);
  }





  // Manage Login
  loginRequest(formdData: NgForm) {
    this.body.set('userId', formdData.value.userId.toString());
    this.body.set('password', formdData.value.password.toString());
    return this.http.post(this.rootURL + 'sign_in', this.body.toString(), this.options).pipe(
      map(results => results['access_token'])
    );
  }

  callLoginService(formdData: NgForm) {

    this.loginRequest(formdData).subscribe(
      (jsonData) => {
        this.giveAccess(jsonData);
      },

      (err) => {
        alert('usuario incorrecto');
      },
      () => {
        // alert('observable complete');
      }
    );
  }
  // tslint:disable-next-line: ban-types
  giveAccess(jsonData: Object) {
    this.navigationExtras = {
      state: {
        accessToken: jsonData,
      }
    };
    this.router.navigate(['/products'], this.navigationExtras);

    this.appComponent.appPages = [
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

  }
}
