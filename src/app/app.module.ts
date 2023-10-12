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
import { CustomUppercasePipe } from 'src/pipes/custom-uppercase.pipe';
import { ChieldrenOnePageComponent } from 'src/pages/chieldren-2-page.component';
import { ChieldrenTwoPageComponent } from 'src/pages/chieldren-1-page.component';
import { FatherPageComponent } from 'src/pages/father.page.component';
import { LoginPageComponent } from 'src/pages/login-page.component';
import { ClientDetailPageComponent } from 'src/pages/cliente-detail-page.component';
import {RxJsPageComponent} from "../pages/rxjs-page.component";
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    ClientListPage,
    BindingPageComponent,
    CustomUppercasePipe,
    FatherPageComponent,
    ChieldrenOnePageComponent,
    ChieldrenTwoPageComponent,
    LoginPageComponent,
    ClientDetailPageComponent,
    RxJsPageComponent
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
