import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent} from './navbar/navbar.component'
import { LandingpageComponent} from './landingpage/landingpage.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperiencepageComponent } from './experiencepage/experiencepage.component';
import { TechpageComponent } from './techpage/techpage.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    ExperiencesComponent,
    ExperiencepageComponent,
    TechpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
