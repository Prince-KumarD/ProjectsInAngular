import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { LinechartComponent } from './widgets/linechart/linechart.component';
import { ScorecardComponent } from './widgets/scorecard/scorecard.component';
import { GreetcardComponent } from './widgets/greetcard/greetcard.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HeaderComponent,
    LinechartComponent,
    ScorecardComponent,
    GreetcardComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    HighchartsChartModule,
    RouterModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    GreetcardComponent,
    LinechartComponent,
    ScorecardComponent
  ]

})
export class SharedModule { }
