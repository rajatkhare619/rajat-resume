import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import {ActivatedRoute, Router} from '@angular/router';

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
      path => {
        this.page = path;
        console.log(path);
      });
  }

}
