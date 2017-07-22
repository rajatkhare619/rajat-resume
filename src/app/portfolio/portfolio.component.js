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
var PortfolioComponent = (function () {
    function PortfolioComponent() {
        this.show = "";
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.showDetails = function (data) {
        if (data === "unitcon") {
            this.show = "unitcon";
        }
        else if (data === "dict") {
            this.show = "dict";
        }
        else {
            this.show = "none";
        }
        ;
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    core_1.Component({
        selector: 'app-portfolio',
        templateUrl: './portfolio.component.html',
        animations: [router_animations_1.routerTransition()],
        host: { '[@routerTransition]': '' },
        styleUrls: ['./portfolio.component.css']
    })
], PortfolioComponent);
exports.PortfolioComponent = PortfolioComponent;
