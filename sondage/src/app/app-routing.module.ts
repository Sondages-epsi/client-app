import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnalComponent } from './personnal/personnal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';

import { WorkflowGuardGuard } from './workflow/workflow-guard.guard';
import { WorkflowService } from './workflow/workflow.service';
import { from } from 'rxjs';

export const appRoutes: Routes = [
  // 7st Route
  { path: 'graph', component: HomeComponent },
  // 1st Route
  { path: 'personal', component: PersonnalComponent },
  // 2nd Route
  {
    path: 'work',
    component: WorkComponent
    // , canActivate: [WorkflowGuardGuard]
  },
  // 3rd Route
  {
    path: 'adress',
    component: AddressComponent
    // ,
    // canActivate: [WorkflowGuardGuard
    // ]
  },
  // 4th Route
  {
    path: 'result',
    component: ResultComponent
    // ,
    // canActivate: [WorkflowGuardGuard]
  },
  // 5th Route
  { path: '', redirectTo: '/graph', pathMatch: 'full' },
  // 6th Route
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: [WorkflowGuardGuard]
})
export class AppRoutingModule {}
