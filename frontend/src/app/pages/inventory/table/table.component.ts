import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'price', 'stock', 'active', 'getdetails'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  doFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  stock: number;
  active: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', price: 1.0079, stock: 12, active: false },
  { position: 2, name: 'Helium', price: 4.0026, stock: 31, active: true },
  { position: 3, name: 'Lithium', price: 6.941, stock: 36, active: false },
  { position: 4, name: 'Beryllium', price: 9.0122, stock: 35, active: true },
  { position: 5, name: 'Boron', price: 10.811, stock: 17, active: true },
  { position: 6, name: 'Carbon', price: 12.0107, stock: 25, active: false },
  { position: 7, name: 'Nitrogen', price: 14.0067, stock: 10, active: true },
  { position: 8, name: 'Oxygen', price: 15.9994, stock: 15, active: true },
  { position: 9, name: 'Fluorine', price: 18.9984, stock: 11, active: false },
  { position: 10, name: 'Neon', price: 20.1797, stock: 8, active: true },
  { position: 11, name: 'Sodium', price: 22.9897, stock: 18, active: true },
  { position: 12, name: 'Magnesium', price: 24.305, stock: 12, active: false },
  { position: 13, name: 'Aluminum', price: 26.9815, stock: 22, active: false },
  { position: 14, name: 'Silicon', price: 28.0855, stock: 28, active: true },
  { position: 15, name: 'Phosphorus', price: 30.9738, stock: 50, active: true },
  { position: 16, name: 'Sulfur', price: 32.065, stock: 60, active: true },
  { position: 17, name: 'Chlorine', price: 35.453, stock: 4, active: true },
  { position: 18, name: 'Argon', price: 39.948, stock: 10, active: true },
  { position: 19, name: 'Potassium', price: 39.0983, stock: 10, active: true },
  { position: 20, name: 'Calcium', price: 40.078, stock: 10, active: false },
];
