import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
selectedType = 'technologies';
langs = [
  { name: 'HTML', level: '300px' },
  { name: 'CSS', level: '200px' },
  { name: 'Bootstrap', level: '220px' },
  {name: 'JavaScript', level: '267px'},
  { name: 'jQuery', level: '244px' },
  { name: 'Angular1.x', level: '277px' },
  { name: 'Ionic 1', level: '220px' },
  { name: 'Jasmine', level: '160px' },
  { name: 'Angular2+', level: '120px' },
  { name: 'Node.js', level: '90px' },
  { name: 'Java', level: '139px' },
  { name: 'C#', level: '107px' }
  ];
tools = [{ name: 'WebStorm', level: '164px' },
  { name: 'Visual Studio', level: '50px' },
  { name: 'Eclipse', level: '70px' },
  { name: 'Brackets', level: '60px' },
  { name: 'Git', level: '120px' },
  { name: 'Chrome Developer Tools', level: '100px' },
  { name: 'NPM', level: '60px' },
  { name: 'Gulp', level: '40px' }
  ];
  constructor() { }

  ngOnInit() {
  }

  changeType(selectedValue) {
  this.selectedType = selectedValue;
  }
}
