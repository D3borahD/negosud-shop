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
import { ProductComponent } from './pages/winepage/components/product/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
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
import { FamiliesFiltersComponent } from './pages/winepage/components/filters/families-filters/families-filters.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import { HousesFiltersComponent } from './pages/winepage/components/filters/houses-filters/houses-filters.component';
import { YearsFiltersComponent } from './pages/winepage/components/filters/years-filters/years-filters.component';
import { PricesFiltersComponent } from './pages/winepage/components/filters/prices-filters/prices-filters.component';
import {CartService} from "./core/services/cart.service";

const routes: Routes = [
  { path: "vins", component: WinepageComponent},
  { path: "contact", component: ContactComponent},
  { path: "vins/:id", component: ProductComponent},
  { path: "panier", component: CartComponent},
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
    ProductComponent,
    CartComponent,
    SubscriptionComponent,
    ConnectionComponent,
    ProductsHeaderComponent,
    ProductBoxComponent,
    FamiliesFiltersComponent,
    HousesFiltersComponent,
    YearsFiltersComponent,
    PricesFiltersComponent
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
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
