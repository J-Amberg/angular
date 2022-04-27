import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  homeActive = true;
  featuredItemsActive = false;
  shopByCategoryActive = false;
  cartActive = false;  

  makePageActive(num: number){
    this.homeActive = false;
    this.featuredItemsActive = false;
    this.shopByCategoryActive = false;
    this.cartActive = false;
    if(num == 0)
      this.homeActive = true;
    if(num == 1)
      this.featuredItemsActive = true;
    if(num == 2)
      this.shopByCategoryActive = true;
    if(num == 3)
      this.cartActive = true;
  }

}
