import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInizialeComponent } from './paginaIntro/pagina-iniziale/pagina-iniziale.component';
import { FooterComponent } from './paginaIntro/footer/footer.component';
import { NavBarComponent } from './paginaIntro/nav-bar/nav-bar.component';
import { WelcomePageComponent } from './welcomePage/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInizialeComponent,
    FooterComponent,
    NavBarComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
