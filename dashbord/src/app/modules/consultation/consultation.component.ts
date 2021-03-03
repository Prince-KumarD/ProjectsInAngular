import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  date: Date;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', date: new Date('2019-01-16') },
  {position: 2, name: 'Helium', date: new Date('2019-01-16')},
  {position: 3, name: 'Lithium', date: new Date('2019-01-16')},
  {position: 4, name: 'Beryllium', date: new Date('2019-01-16')},
  {position: 5, name: 'Boron', date: new Date('2019-01-16')},
  {position: 6, name: 'Carbon', date: new Date('2019-01-16')},
  {position: 7, name: 'Nitrogen', date: new Date('2019-01-16')},
  {position: 8, name: 'Oxygen', date: new Date('2019-01-16')},
  {position: 9, name: 'Fluorine', date: new Date('2019-01-16')},
  {position: 10, name: 'Neon', date: new Date('2019-01-16')},
  {position: 11, name: 'Sodium', date: new Date('2019-01-16')},
  {position: 12, name: 'Magnesium', date: new Date('2019-01-16')},
  {position: 13, name: 'Aluminum', date: new Date('2019-01-16')},
  {position: 14, name: 'Silicon', date: new Date('2019-01-16')},
  {position: 15, name: 'Phosphorus', date: new Date('2019-01-16')},
  {position: 16, name: 'Sulfur', date: new Date('2019-01-16')},
  {position: 17, name: 'Chlorine', date: new Date('2019-01-16')},
  {position: 18, name: 'Argon', date: new Date('2019-01-16')},
  {position: 19, name: 'Potassium', date: new Date('2019-01-16')},
  {position: 20, name: 'Calcium', date: new Date('2019-01-16')},
];


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
