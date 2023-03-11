/* ----- modules ----- */
import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';

/* ----- components ----- */
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WinepageComponent } from './pages/winepage/winepage.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './pages/winepage/components/product/productList/product-list.component';
import { ProductComponent } from './pages/winepage/components/product/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ConnectionComponent } from './components/connection/connection.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ProductsHeaderComponent } from './pages/winepage/components/products-header/products-header.component';
import { ProductBoxComponent } from './pages/winepage/components/product-box/product-box.component';

const routes: Routes = [
  { path: "vins", component: WinepageComponent},
  { path: "contact", component: ContactComponent},
  { path: "vins/:id", component: ProductComponent},
  { path: "panier", component: ShoppingCartComponent},
  { path: "inscription", component: SubscriptionComponent},
  { path: "connexion", component: ConnectionComponent},
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
    ShoppingCartComponent,
    SubscriptionComponent,
    ConnectionComponent,
    ProductsHeaderComponent,
    ProductBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule
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
