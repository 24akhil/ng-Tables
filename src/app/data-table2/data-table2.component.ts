import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { DataTable2DataSource, DataTable2Item } from './data-table2-datasource';
import { BehaviorSubject } from 'rxjs';


// let EXAMPLE_DATA: DataTable2Item[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
//   {id: 6, name: 'Carbon'},
//   {id: 7, name: 'Nitrogen'},
//   {id: 8, name: 'Oxygen'},
// ];

@Component({
  selector: 'app-data-table2',
  templateUrl: './data-table2.component.html',
  styleUrls: ['./data-table2.component.css']
})
export class DataTable2Component {
   EXAMPLE_DATA: DataTable2Item[] = [
    {id: 1, name: 'Hydrogen'},
    {id: 2, name: 'Helium'},
    {id: 3, name: 'Lithium'},
    {id: 4, name: 'Beryllium'},
    {id: 5, name: 'Boron'},
    {id: 6, name: 'Carbon'},
    {id: 7, name: 'Nitrogen'},
    {id: 8, name: 'Oxygen'},
  ];
  //  @ViewChild(MatPaginator) paginator: MatPaginator;
  //  @ViewChild(MatSort) sort: MatSort;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  subject = new BehaviorSubject(this.EXAMPLE_DATA);
  dataSource = new DataTable2DataSource(this.subject.asObservable());
  // ngAfterViewInit() {
  //   this.dataSource = new DataTable2DataSource(this.subject.asObservable());
  // }
  addTableRow(){    
   this.EXAMPLE_DATA.push({id: 7, name: 'India'});
   this.subject.next(this.EXAMPLE_DATA);
   console.log("jjj");
   this.EXAMPLE_DATA.forEach(data=>console.log(data));
  }


}
