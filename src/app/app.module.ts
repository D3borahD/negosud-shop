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
import { ProductListComponent } from './components/product/productList/product-list.component';
import { ProductComponent } from './components/product/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: "vins", component: WinepageComponent},
  { path: "contact", component: ContactComponent},
  { path: "vins/:id", component: ProductComponent},
  { path: "panier", component: ShoppingCartComponent},
  { path: "", component: HomepageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WinepageComponent,
    ContactComponent,
    ProductListComponent,
    ProductComponent,
    ShoppingCartComponent
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
