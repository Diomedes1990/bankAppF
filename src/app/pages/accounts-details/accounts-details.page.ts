import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BankServiceService } from 'src/app/services/bank-service.service';
import { Accounts } from 'src/app/models/accounts';


@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.page.html',
  styleUrls: ['./accounts-details.page.scss'],
})
export class AccountsDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public bankservice: BankServiceService) { }

  alias: string;
  availableAmount: string;

  ngOnInit() {

    if (this.router.getCurrentNavigation().extras.state) {
      this.alias = this.router.getCurrentNavigation().extras.state.alias;
      this.availableAmount = this.router.getCurrentNavigation().extras.state.availableAmount;
    } else {
      this.router.navigate(['/login']);
    }
  }

}

