import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { QtsComponent } from './qts.component';
import { QtsRoutingModule } from './qts-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { QtsChartsComponent, FormatDataPipe } from './qts-charts.component';
//import { FormatDataPipe } from './format-data.pipe';
import { DecimalPipe } from '@angular/common';

@NgModule({
  imports: [
    QtsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  declarations: [QtsComponent, QtsChartsComponent, FormatDataPipe ],
  providers: [ DatePipe, DecimalPipe ]
})
export class QtsModule { }
