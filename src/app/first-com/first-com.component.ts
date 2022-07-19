import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-first-com',
  templateUrl: './first-com.component.html',
  styleUrls: ['./first-com.component.scss']
})
export class FirstComComponent implements OnInit {

courses : string[] = ['CSS' , 'JS' , 'PHP' , 'Python'];
//////
////// Display Data = Binding ////
// 1- Interpolation :
courseName="Angular 6";
imageURL= "data:image/png;base64,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";

//////
  title="Reem";

  isActive=true;

  MethodName(){
    alert("Welcome to event binding");
    console.log("Event Fired");
  }

  divClicked(){
    console.log("Div Fired");
  }
  btnClicked($event:any){
    $event.stopPropagation(); /// مش هينفذ اي ايفينت برا
    console.log("Button Fired : " , $event);
  }

  //// with js
  onKeyUp($event:any){
    if($event.keyCode === 13){
      console.log("enter was pressed");
    }
  }

  //// with angular
  /// event filter
  onKeyUpNew($event:any){
    console.log("ng enter was pressed and its value is : " , $event.target.value); //get input's val
  }

  //get input's value in a variable with ng
  nameval:any;
  onKeyUpVal($event:any){
    this.nameval=$event.target.value;
  }

  //Get input's val by Template Variable (# )
  tempVal:any;
  onKeyUpTempVal(firstName:any){
    this.tempVal=firstName;
  }

  //Get input's val by Banana-in-Boxing
  onKeyUpBanana(){
  }
  //////db Service
  // db = new DbService(); // wrong way
  coursat; // correct way
  constructor(dbservice : DbService) { // Dependency injection with any parameter
    this.coursat=dbservice.getAll();
   }

  ngOnInit(): void {
  }

}
