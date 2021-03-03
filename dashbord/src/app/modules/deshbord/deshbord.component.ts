import { Component, OnInit } from '@angular/core';
import {DeshbordService} from '../deshbord.service';

@Component({
  selector: 'app-deshbord',
  templateUrl: './deshbord.component.html',
  styleUrls: ['./deshbord.component.css']
})
export class DeshbordComponent implements OnInit {

  lineChart = [];
  constructor(private dashboardService: DeshbordService) { }

  ngOnInit(): void {
    this.lineChart = this.dashboardService.lineChart();
  }

}
