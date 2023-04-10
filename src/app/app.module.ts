import { NgModule,enableProdMode,ViewChild  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SamplefilterComponent } from './samplefilter/samplefilter.component';
import { DatePipe } from '@angular/common';

//template  https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/DateTimeScaleLightweight/Angular/Light/
//install these packages
//npx -p devextreme-cli devextreme add devextreme-angular
import { DxRangeSelectorModule, DxDataGridModule,DxNumberBoxModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Service, Employee } from './app.service';
//navbar
import {
  DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule
} from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    SamplefilterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    DxRangeSelectorModule,
    DxDataGridModule,
    DxNumberBoxModule,
    
    DxDrawerModule,
    DxListModule,
    DxRadioGroupModule,
    DxToolbarModule
    
  ],
  providers: [Service, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
