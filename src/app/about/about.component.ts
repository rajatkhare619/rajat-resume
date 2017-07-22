import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
