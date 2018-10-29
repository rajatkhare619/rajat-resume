import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
page: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd ) {
          this.page = (<string>event['url']).substring(1, 2).toUpperCase().concat((<string>event['url']).substring(2));
        }

      });
  }

}
