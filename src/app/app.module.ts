/*import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component'; 
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from 'app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component'; // Ensure this path is correct

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FirstComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }