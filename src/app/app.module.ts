import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent, ProjectTitleDirective } from './components/project/project.component';
import { TechBadgeComponent } from './components/tech-badge/tech-badge.component';
import { ProjectActionsComponent } from './components/project-actions/project-actions.component';
import { ButtonComponent } from './components/button/button.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { HeroComponent } from './sections/hero/hero.component';
import { CareerComponent } from './sections/career/career.component';
import { TechSkillsComponent } from './sections/tech-skills/tech-skills.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectComponent,
        ProjectTitleDirective,
        TechBadgeComponent,
        ProjectActionsComponent,
        ButtonComponent,
        ProjectsComponent,
        ParticlesComponent,
        HeroComponent,
        CareerComponent,
        TechSkillsComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
