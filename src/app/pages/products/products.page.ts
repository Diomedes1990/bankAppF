import { CreditCards } from './../../models/credit-cards';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BankServiceService } from 'src/app/services/bank-service.service';
import { Accounts } from 'src/app/models/accounts';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public product: string;
  public lengthCards: number;
  public lengthAccounts: number;

  navigationExtras: NavigationExtras = {
    state: {
      alias: '',
      availableAmount: '',
    }
  };



  constructor(private route: ActivatedRoute, private router: Router, public bankservice: BankServiceService) { }
  authorization: any;

  ngOnInit() {

    // tslint:disable-next-line: max-line-length
    // this.bankservice.getAccounts('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEwMDAxMDMyMSJ9.kPLjCmPJaw8jaOu0cEp4sXR0e52YRrj97OCGJaQGzA4');
    // tslint:disable-next-line: max-line-length
    // this.bankservice.getCards('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEwMDAxMDMyMSJ9.kPLjCmPJaw8jaOu0cEp4sXR0e52YRrj97OCGJaQGzA4');


    if (this.router.getCurrentNavigation().extras.state) {
      this.authorization = this.router.getCurrentNavigation().extras.state.accessToken;

      this.bankservice.getAccounts(this.authorization);
      this.bankservice.getCards(this.authorization);

    } else {
      this.router.navigate(['/login']);
    }
  }

  DetailsCuentas(account: Accounts) {

    this.navigationExtras = {
      state: {
        alias: account.alias,
        availableAmount: account.availableAmount,
      }
    };


    this.router.navigate(['/accounts-details'], this.navigationExtras);
  }


  DetailsCards(card: CreditCards) {

    this.navigationExtras = {
      state: {


        alias: card.alias,
        number: card.number,
        avaliableAmountRD: card.avaliableAmountRD,
        avaliableAmountUS: card.avaliableAmountUS,
        isInternational: card.isInternational,
        productType: card.productType,
        // alias: account.alias,
        // availableAmount: account.availableAmount,
      }
    };


    this.router.navigate(['/cards-details'], this.navigationExtras);
  }

}
