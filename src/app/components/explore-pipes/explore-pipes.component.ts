import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-pipes',
  templateUrl: './explore-pipes.component.html',
  styleUrls: ['./explore-pipes.component.css']
})
export class ExplorePipesComponent implements OnInit {
  name: string;
  paymentDate: Date;
  amount: string;
  height: string;
  miles: string;
  constructor() { }

  ngOnInit(): void {
  }

}
