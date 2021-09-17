import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonSocialMediaComponent } from './components/button-social-media/button-social-media.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormIncludesValuesComponent } from './components/form-includes-values/form-includes-values.component';
import { MaterialAngularModule } from './material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChartComponent,
    FormIncludesValuesComponent,
    ButtonSocialMediaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    FontAwesomeModule,
    NgxMaterialTimepickerModule.setLocale('pt-BR'),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
