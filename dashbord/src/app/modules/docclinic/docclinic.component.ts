import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  clinicName: string;
  clinicAdd: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', clinicName: '1.0079', clinicAdd: 'H'},
  {position: 2, name: 'Helium', clinicName: '4.0026', clinicAdd: 'He'},
  {position: 3, name: 'Lithium', clinicName: '6.941', clinicAdd: 'Li'},
  {position: 4, name: 'Beryllium', clinicName: '9.0122', clinicAdd: 'Be'},
  {position: 5, name: 'Boron', clinicName: '10.811', clinicAdd: 'B'},
  {position: 6, name: 'Carbon', clinicName: '12.0107', clinicAdd: 'C'},
  {position: 7, name: 'Nitrogen', clinicName: '14.0067', clinicAdd: 'N'},
  {position: 8, name: 'Oxygen', clinicName: '15.9994', clinicAdd: 'O'},
  {position: 9, name: 'Fluorine', clinicName: '18.9984', clinicAdd: 'F'},
  {position: 10, name: 'Neon', clinicName: '20.1797', clinicAdd: 'Ne'},
  {position: 11, name: 'Sodium', clinicName: '22.9897', clinicAdd: 'Na'},
  {position: 12, name: 'Magnesium', clinicName: '24.305', clinicAdd: 'Mg'},
  {position: 13, name: 'Aluminum', clinicName: '26.9815', clinicAdd: 'Al'},
  {position: 14, name: 'Silicon', clinicName: '28.0855', clinicAdd: 'Si'},
  {position: 15, name: 'Phosphorus', clinicName: '30.9738', clinicAdd: 'P'},
  {position: 16, name: 'Sulfur', clinicName: '32.065', clinicAdd: 'S'},
  {position: 17, name: 'Chlorine', clinicName: '35.453', clinicAdd: 'Cl'},
  {position: 18, name: 'Argon', clinicName: '39.948', clinicAdd: 'Ar'},
  {position: 19, name: 'Potassium', clinicName: '39.0983', clinicAdd: 'K'},
  {position: 20, name: 'Calcium', clinicName: '40.078', clinicAdd: 'Ca'},
];

@Component({
  selector: 'app-docclinic',
  templateUrl: './docclinic.component.html',
  styleUrls: ['./docclinic.component.css']
})
export class DocclinicComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'clinicName', 'clinicAdd'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

