"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var about_component_1 = require("./about/about.component");
var skills_component_1 = require("./skills/skills.component");
var router_1 = require("@angular/router");
var header_component_1 = require("./header/header.component");
var level_directive_1 = require("./level.directive");
var education_component_1 = require("./education/education.component");
var work_component_1 = require("./work/work.component");
var contact_component_1 = require("./contact/contact.component");
var animations_1 = require("@angular/platform-browser/animations");
var portfolio_component_1 = require("./portfolio/portfolio.component");
var appRoutes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'skills', component: skills_component_1.SkillsComponent },
    { path: 'education', component: education_component_1.EducationComponent },
    { path: 'work', component: work_component_1.WorkComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'portfolio', component: portfolio_component_1.PortfolioComponent },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            skills_component_1.SkillsComponent,
            header_component_1.HeaderComponent,
            level_directive_1.LevelDirective,
            education_component_1.EducationComponent,
            work_component_1.WorkComponent,
            contact_component_1.ContactComponent,
            portfolio_component_1.PortfolioComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
