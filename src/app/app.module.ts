/* ----- modules ----- */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

/* ----- components ----- */
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WinepageComponent } from './components/winepage/winepage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "vins",
    component: WinepageComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    WinepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
