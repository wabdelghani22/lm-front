import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MasseComponent } from './masse/masse.component';
import { FlagComponent } from './flag/flag.component';
import { RubriquesComponent } from './rubriques/rubriques.component';
import { MontantsComponent } from './montants/montants.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'masse', component: MasseComponent },
  { path: 'flag', component: FlagComponent },
  { path: 'rubriques', component: RubriquesComponent },
  { path: 'montants', component: MontantsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
