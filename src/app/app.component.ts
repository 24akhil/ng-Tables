import { Component, OnInit, Injectable } from '@angular/core';
import { ExampleDataSource } from './cdk-table/cdk-table.component';
import { AppThirdTableComponent } from './app-third-table/app-third-table.component';
import { TestTableComponent } from './test-table/test-table.component';
import { DataTable2Component } from './data-table2/data-table2.component';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ExampleDataSource,AppThirdTableComponent]
})
export class AppComponent implements OnInit{
  
  thirdTable : AppThirdTableComponent;
  exp:TestTableComponent;
  // exDataSrc: ExampleDataSource;
  AppComponent( exDataSrc:ExampleDataSource,thirdTable :AppThirdTableComponent,
                exp:TestTableComponent ) {
    // this.exDataSrc = exDataSrc;
    this.thirdTable = thirdTable;
  }
  ngOnInit(): void {
    
  }
  title = 'table-app'; 
   serv = new ExampleDataSource();
  addRow(){
    console.log("appComponent");
    //this.exDataSrc.addTableRow();
    //this.serv.addTableRow();
//    let tbl = new AppThirdTableComponent();
    //let tbl = new TestTableComponent();
    let tbl = new DataTable2Component();
    tbl.addTableRow();
    
  }
}
