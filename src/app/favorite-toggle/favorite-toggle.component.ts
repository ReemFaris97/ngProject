import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-toggle',
  templateUrl: './favorite-toggle.component.html',
  styleUrls: ['./favorite-toggle.component.scss']
})
export class FavoriteToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isFavorite:boolean=false;
  onFavClick(){
    this.isFavorite=!this.isFavorite;
    console.log(this.isFavorite);
  }


}
