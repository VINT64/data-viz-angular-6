import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { QtsModule } from './qts/qts.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    QtsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
