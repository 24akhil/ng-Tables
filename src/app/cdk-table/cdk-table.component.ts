// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cdk-table',
//   templateUrl: './cdk-table.component.html',
//   styleUrls: ['./cdk-table.component.css']
// })
// export class CdkTableComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
///
import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic CDK data-table
 */
@Component({
  selector: 'app-cdk-table',
  templateUrl: './cdk-table.component.html',
  styleUrls: ['./cdk-table.component.css']
})
export class CdkTableComponent implements OnInit{  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new ExampleDataSource();
  dataSource$ = new BehaviorSubject<any[]>(ELEMENT_DATA);
  private ELEMENT_DATA$ =new BehaviorSubject(ELEMENT_DATA);

  ngOnInit(): void {
    //this.dataSource$ = this.ELEMENT_DATA$.pipe(map(v=>Object.values(v)));
  
  }
  
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);
  
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}

    addTableRow(){
     ELEMENT_DATA.push({position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'});
     this.data.next(ELEMENT_DATA);
     ELEMENT_DATA.forEach(element => {
      console.log("cdkTableAddRow"+element.name);
      
     });
     
   }
}

