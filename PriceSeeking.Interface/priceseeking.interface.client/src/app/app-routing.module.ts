import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLinksComponent } from './components/add-links/add-links.component';
import { HomeComponent } from './components/home/home.component';
import { ObterInfoComponent } from './components/obter-info/obter-info.component';
import { DeleteLinksComponent } from './components/delete-links/delete-links.component';

const routes: Routes = [
  { path: 'get-links', component: AddLinksComponent },
  { path: 'obt-info', component: ObterInfoComponent },
  { path: 'delete-links', component:DeleteLinksComponent },
  { path: '*', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
