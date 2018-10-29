import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',

  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
show: string;

  constructor() { }

  ngOnInit() {
  }

  showDetails(data) {
    if (data === "unitcon") {
      this.show = "unitcon";
    } else if (data === "dict") {
      this.show = "dict";
    } else if (data === "reminderapp") {
      this.show = "reminderapp";
    } else {
      this.show = "none";
    }
  }
}
