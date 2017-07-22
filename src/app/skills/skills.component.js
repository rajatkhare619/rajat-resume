"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_animations_1 = require("../router.animations");
var SkillsComponent = (function () {
    function SkillsComponent() {
        this.selectedType = 'technologies';
        this.langs = [
            { name: 'HTML', level: '300px' },
            { name: 'CSS', level: '200px' },
            { name: 'Bootstrap', level: '220px' },
            { name: 'JavaScript', level: '267px' },
            { name: 'jQuery', level: '244px' },
            { name: 'Angular1.x', level: '277px' },
            { name: 'Ionic 1', level: '220px' },
            { name: 'Jasmine', level: '160px' },
            { name: 'Angular2+', level: '120px' },
            { name: 'Node.js', level: '90px' },
            { name: 'Java', level: '139px' },
            { name: 'C#', level: '107px' }
        ];
        this.tools = [{ name: 'WebStorm', level: '164px' },
            { name: 'Visual Studio', level: '50px' },
            { name: 'Eclipse', level: '70px' },
            { name: 'Brackets', level: '60px' },
            { name: 'Git', level: '120px' },
            { name: 'Chrome Developer Tools', level: '100px' },
            { name: 'NPM', level: '60px' },
            { name: 'Gulp', level: '40px' }
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent.prototype.changeType = function (selectedValue) {
        this.selectedType = selectedValue;
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    core_1.Component({
        selector: 'app-skills',
        templateUrl: './skills.component.html',
        animations: [router_animations_1.routerTransition()],
        host: { '[@routerTransition]': '' },
        styleUrls: ['./skills.component.css']
    })
], SkillsComponent);
exports.SkillsComponent = SkillsComponent;
