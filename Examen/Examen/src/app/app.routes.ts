import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HeroeComponent} from "./heroe/heroe.component";
import {PoderComponent} from "./poder/poder.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'heroe', component: HeroeComponent},
  {path: 'heroe/:idHeroe/poder', component: PoderComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
