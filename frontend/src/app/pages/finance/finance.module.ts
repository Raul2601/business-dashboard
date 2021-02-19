import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CoreModule } from 'src/app/core/core.module';

import { MaterialModule } from '../../shared/material.module'
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StatementComponent } from './statement/statement.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BudgetComponent } from './budget/budget.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [FinanceComponent, DashboardComponent, StatementComponent, BalanceComponent, TransactionsComponent, BudgetComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class FinanceModule { }
