import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LevelDirective } from './level.directive';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes = [
  { path: '', component: AboutComponent, data: { routeIdx: 0 } },
  { path: 'skills', component: SkillsComponent, data: { routeIdx: 1 } },
  { path: 'education', component: EducationComponent, data: { routeIdx: 2 } },
  { path: 'work', component: WorkComponent, data: { routeIdx: 3 } },
  { path: 'portfolio', component: PortfolioComponent, data: { routeIdx: 4 } },
  { path: 'contact', component: ContactComponent, data: { routeIdx: 5 } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    HeaderComponent,
    LevelDirective,
    EducationComponent,
    WorkComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
