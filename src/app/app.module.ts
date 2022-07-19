import { DbService } from './services/db.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComComponent } from './first-com/first-com.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
