import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ProjectComponent,
  ProjectTitleDirective,
} from './components/project/project.component';
import { TechBadgeComponent } from './components/tech-badge/tech-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectTitleDirective,
    TechBadgeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
