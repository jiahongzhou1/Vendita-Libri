import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInizialeComponent } from './paginaIntro/pagina-iniziale/pagina-iniziale.component';
import { FooterComponent } from './paginaIntro/footer/footer.component';
import { NavBarComponent } from './paginaIntro/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInizialeComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
