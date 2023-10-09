import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from 'src/components/component.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from 'src/pages/binding-page.component';
import { ClientListPage } from 'src/pages/client-list-page.component';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    ClientListPage,
    BindingPageComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
