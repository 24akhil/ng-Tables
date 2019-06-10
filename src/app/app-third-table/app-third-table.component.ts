import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-app-third-table',
  templateUrl: './app-third-table.component.html',
  styleUrls: ['./app-third-table.component.css']
})
export class AppThirdTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {      
      this.heroes$.subscribe(changedHeroData => {
      this.tableDataSource$.next(Object.values(changedHeroData));

    });
  }

  @ViewChild('table') table1: MatTable<any>;
  @ViewChild(MatTable) table: MatTable<any>;


  tableDataSource$ = new BehaviorSubject<any[]>([
    {
      name: 'Hammerer Maccabeus',
      types: 'Holy/Fire',
      attack: 1,
      defense: 1,
      speed: 1,
      healing: 1,
      recovery: 1,
      health: 5
    },
    {
      name: 'Ethereal Moodmorph',
      types: 'Water/Fire',
      attack: 1,
      defense: 1,
      speed: 1,
      healing: 1,
      recovery: 1,
      health: 5
    },
  ]);
 displayedColumns$ = new BehaviorSubject<string[]>([
    'name',
    'types',
    'attack',
    'defense',
    'speed',
    'healing',
    'recovery',
    'health',
    'levelUp'
  ]);

  heroes$ = new BehaviorSubject<{[name: string]: any}>({
    'Hammerer Maccabeus': {
      name: 'Hammerer Maccabeus',
      types: 'Holy/Fire',
      attack: 1,
      defense: 1,
      speed: 1,
      healing: 1,
      recovery: 1,
      health: 5
    },
    'Ethereal Moodmorph': {
      name: 'Ethereal Moodmorph',
      types: 'Water/Fire',
      attack: 1,
      defense: 1,
      speed: 1,
      healing: 1,
      recovery: 1,
      health: 5
    }
  });

  levelUp(heroName: string) {
    const updatedHero = { ... this.heroes$.value[heroName] };
    updatedHero.attack++;
    updatedHero.defense++;
    updatedHero.speed++;
    updatedHero.recovery++;
    updatedHero.healing++;
    updatedHero.health++;
    
    const newHeroData = { ... this.heroes$.value };
    //console.log({...this.heroes$.value});
    newHeroData[heroName] = updatedHero;  
    console.log(newHeroData);
    this.heroes$.next(newHeroData);
  }
  addTableRow(){
    const updatedData = [{name: 'ShaktiMan',types: '5 Elements',
    attack: 9,defense: 9,speed: 9,healing: 9,recovery: 9,health: 9}]
    this.heroes$.next(this.heroes$.value.push(updatedData));
    console.log(updatedData);
    console.log(this.heroes$.value);
   // this.table.renderRows();
   const arry =[{name:"sda"},{name:"qwe"}];
   //this.tableDataSource$.value=updatedData;
  }
}
