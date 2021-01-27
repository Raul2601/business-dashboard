import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface UsersData {
  id: number;
  name: string;
}

const ELEMENT_DATA: UsersData[] = [
  { id: 1560608769632, name: 'Artificial Intelligence' },
  { id: 1560608796014, name: 'Machine Learning' },
  { id: 1560608787815, name: 'Robotic Process Automation' },
  { id: 1560608805101, name: 'Blockchain' },
];

@Component({
  selector: 'app-ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.css']
})
export class NgTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<UsersData>(ELEMENT_DATA);

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(public dialog: MatDialog) { }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    var d = new Date();
    var data = this.dataSource.data;
    data.push({
      id: d.getTime(),
      name: row_obj.name
    });
    this.dataSource.data = data;
  }

  updateRowData(row_obj) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
      }
      return true;
    });
  }

  deleteRowData(row_obj) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }

}
