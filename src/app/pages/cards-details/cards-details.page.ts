import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BankServiceService } from 'src/app/services/bank-service.service';
import { Accounts } from 'src/app/models/accounts';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.page.html',
  styleUrls: ['./cards-details.page.scss'],
})
export class CardsDetailsPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, public bankservice: BankServiceService) { }


  alias: string;
  number: string;
  avaliableAmountRD: number;
  avaliableAmountUS: number;
  isInternational: number;
  productType: number;

  ngOnInit() {

    if (this.router.getCurrentNavigation().extras.state) {
      this.alias = this.router.getCurrentNavigation().extras.state.alias;
      this.number = this.router.getCurrentNavigation().extras.state.number;
      this.avaliableAmountRD = this.router.getCurrentNavigation().extras.state.alias;
      this.avaliableAmountUS = this.router.getCurrentNavigation().extras.state.avaliableAmountUS;
      this.isInternational = this.router.getCurrentNavigation().extras.state.isInternational;
      this.productType = this.router.getCurrentNavigation().extras.state.productType;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
