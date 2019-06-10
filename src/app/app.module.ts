import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestTableComponent } from './test-table/test-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DataTable2Component } from './data-table2/data-table2.component';
import { CdkTableComponent } from './cdk-table/cdk-table.component';
import { CdkTableModule } from '@angular/cdk/table';
import { AppThirdTableComponent } from './app-third-table/app-third-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTableComponent,
    DataTable2Component,
    CdkTableComponent,
    AppThirdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
