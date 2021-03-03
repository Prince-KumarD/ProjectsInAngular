import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ConsultationComponent } from './modules/consultation/consultation.component';
import { DeshbordComponent } from './modules/deshbord/deshbord.component';
import { DocclinicComponent } from './modules/docclinic/docclinic.component';
import { PolicyComponent } from './modules/policy/policy.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DeshbordComponent
  }, {
  path: 'policy',
  component: PolicyComponent
}, {
  path: 'consultation',
  component: ConsultationComponent
}, {
  path: 'docclinic',
  component: DocclinicComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
