/* ----- modules ----- */
import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';

/* ----- components ----- */
import { AppComponent } from './app.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { WinepageComponent } from './components/winepage/winepage.component';
import { ContactComponent } from './components/contact/contact.component';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: "vins", component: WinepageComponent},
  { path: "contact", component: ContactComponent},
  { path: "", component: HomepageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WinepageComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
