import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre="Liste des Assignments";
assignement=[
  {nom:'Devoir 1',description:'Description du devoir 1',dateDeRendu:'2020-10-10',rendu:false},
  {nom:'Devoir 2',description:'Description du devoir 1',dateDeRendu:'2020-10-10',rendu:false},
  {nom:'Devoir 3',description:'Description du devoir 1',dateDeRendu:'2020-10-10',rendu:true},


]
  constructor() { 

  }

  ngOnInit(): void {
    console.log('AssignmentsComponent initialized');
  }

}
