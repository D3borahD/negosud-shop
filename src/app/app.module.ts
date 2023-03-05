/* ----- modules ----- */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

/* ----- components ----- */
import { AppComponent } from './app.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { WinepageComponent } from './components/winepage/winepage.component';
import { ContactComponent } from './components/contact/contact.component';
import {CoreModule} from "./core/core.module";

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
