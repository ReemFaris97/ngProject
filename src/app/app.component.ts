import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngProject';

  
   ////// PiPe
   employee ={ //object of class
    fullName : "Ahmed Taha",
    rating : 5.78 ,
    salary : 5000,
    hiringDate : new Date(2018,10,1)
   }

   longTitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
}
