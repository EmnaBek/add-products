import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component'; // Assure-toi du chemin correct

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent // Ajoute ton composant ici
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
