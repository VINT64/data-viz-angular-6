import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QtsComponent } from './qts.component';


const qtsRoutes : Routes = [
 {path: 'qts', component: QtsComponent }
];

@NgModule({
  imports: [
     RouterModule.forChild(qtsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class QtsRoutingModule { }
