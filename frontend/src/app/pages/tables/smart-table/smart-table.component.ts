import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from './smart-table.service';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {

  ngOnInit(): void {
  }

  settings = {
    add: {
      addButtonContent: '<i class="fa fa-plus fa-2x px-3 "></i>',
      createButtonContent: '<i class="fa fa-check fa-lg mr-3"></i>',
      cancelButtonContent: '<i class="fa fa-times fa-lg"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil fa-lg mr-3"></i>',
      saveButtonContent: '<i class="fa fa-check fa-lg mr-3"></i>',
      cancelButtonContent: '<i class="fa fa-times fa-lg"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash fa-lg"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      login: {
        title: 'Login',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
