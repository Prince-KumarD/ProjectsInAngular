import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeshbordComponent } from 'src/app/modules/deshbord/deshbord.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule} from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { ConsultationComponent } from 'src/app/modules/consultation/consultation.component';
import { DocclinicComponent } from 'src/app/modules/docclinic/docclinic.component';
import { PolicyComponent } from 'src/app/modules/policy/policy.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DeshbordService } from 'src/app/modules/deshbord.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DeshbordComponent,
    ConsultationComponent,
    DocclinicComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    DeshbordService
  ]
})
export class DefaultModule { }
