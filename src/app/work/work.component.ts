import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
