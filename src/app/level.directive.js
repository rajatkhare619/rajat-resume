"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LevelDirective = (function () {
    function LevelDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    LevelDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elRef.nativeElement, 'minWidth', this.appLevel);
    };
    return LevelDirective;
}());
__decorate([
    core_1.Input()
], LevelDirective.prototype, "appLevel", void 0);
__decorate([
    core_1.HostBinding('style.width')
], LevelDirective.prototype, "setWidth", void 0);
LevelDirective = __decorate([
    core_1.Directive({
        selector: '[appLevel]'
    })
], LevelDirective);
exports.LevelDirective = LevelDirective;
