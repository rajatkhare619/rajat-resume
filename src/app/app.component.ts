import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as directions from './router.animations';
import {transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animRoutes', [
      transition(':increment', directions.right),
      transition(':decrement', directions.left)])
  ]
})
export class AppComponent {
  animationState: number;

  constructor(private route: ActivatedRoute) {

  }


  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }
}
