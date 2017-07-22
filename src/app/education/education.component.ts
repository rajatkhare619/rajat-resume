import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
