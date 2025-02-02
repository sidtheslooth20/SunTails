import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { CatsModule } from './cats/cats.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    CatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
