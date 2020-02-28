import { BankServiceService } from './../../services/bank-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      userId: '',
      password: '',
    }
  };

  userId: '00100010321';
  password: '1111';

  constructor(public bankservice: BankServiceService, private router: Router, private dataservices: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.callLogin(form);
  }

  callLogin(form: NgForm) {
    this.bankservice.callLoginService(form);
  }
}
