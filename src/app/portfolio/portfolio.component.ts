import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
show: string = "";

  constructor() { }

  ngOnInit() {
  }

  showDetails(data) {
    if (data === "unitcon") { this.show = "unitcon"; }
    else if (data === "dict") { this.show = "dict"; }
    else { this.show = "none" };
  }
}
