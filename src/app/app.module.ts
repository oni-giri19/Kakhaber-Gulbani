import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { BioAndImageComponent } from './bio-and-image/bio-and-image.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    HeaderComponent,
    BioAndImageComponent,
    SocialsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
