import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AjouterComponent } from './ajouter/ajouter.component';

export const routes: Routes = [
{path: "", component: ListeComponent},
{path: "ajouter", component: AjouterComponent},
{path: "liste", redirectTo: ""},
{path: "detail/:id", component: DetailComponent},
{path: "**", component: PagenotfoundComponent}
];
