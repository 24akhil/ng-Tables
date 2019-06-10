import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';

// TODO: Replace this with your own data model type
export class DataTable2Item {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTable2Item[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
];

/**
 * Data source for the DataTable2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTable2DataSource extends DataSource<DataTable2Item> {
 
  // constructor(private paginator: MatPaginator, private sort: MatSort,
  //             private data$ : Observable<DataTable2Item[]>) {
    constructor(
      private data$ : Observable<DataTable2Item[]>) {   
    super();
    
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTable2Item[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
   
    // const dataMutations = [
    //   observableOf(this.data$),
    //   this.paginator.page,
    //   this.sort.sortChange
    // ];

    // Set the paginator's length
    // let length:number;
    // this.data$.subscribe(res=>length=res.length);
    // this.paginator.length =  length;

    // let arrayData: DataTable2Item[];
    // this.data$.subscribe(data=>arrayData=data);
    // return merge(...dataMutations).pipe(map(() => {
    //   return this.getPagedData(this.getSortedData([...arrayData]));
    // }));
    return this.data$;
  }

  // public addDataToExampleData(){
  //   this.data.push({id: 1, name: 'Hydrogen'});
  //   console.log("hello");
  //   this.dataChange.next(this.data);    
  // }
  // public getDataToExampleData(){
  //   this.data.push({id: 1, name: 'Hydrogen'});
  //   console.log(this.data);
  //   this.dataChange.next(this.data);
  //   return this.data;
    
  // }
  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: DataTable2Item[]) {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   console.log("paging");
  //   return data.splice(startIndex, this.paginator.pageSize);
  // }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getSortedData(data: DataTable2Item[]) {
  //   if (!this.sort.active || this.sort.direction === '') {
  //     console.log("sort");
  //     return data;
  //   }

  //   return data.sort((a, b) => {
  //     const isAsc = this.sort.direction === 'asc';
  //     switch (this.sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'id': return compare(+a.id, +b.id, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
