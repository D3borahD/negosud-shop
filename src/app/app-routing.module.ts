import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



/*const routes: Routes = [
  { path: "vins", component: WinepageComponent},
  { path: "contact", component: ContactComponent},
  { path: "vins/:id", component: ProductComponent},
  { path: "panier", component: CartComponent},
  { path: "inscription", component: SignupComponent},
  { path: "connexion", component: LoginComponent},
  { path: "", component: HomepageComponent},
];*/

@NgModule({
/*  imports: [RouterModule.forRoot(routes)],*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
