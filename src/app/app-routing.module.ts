import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home.component';

const routes : Routes = [
 {path: 'about', component: AboutComponent}, {path: '', component: HomeComponent},
 {path: '404', component: NotFoundComponent},
 {path: '**', redirectTo: '404'}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
