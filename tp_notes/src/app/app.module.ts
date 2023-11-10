import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FormsModule } from '@angular/forms';
import { ListeComponent } from './liste/liste.component';
import { SupprimeComponent } from './supprime/supprime.component';
import { CacherComponent } from './cacher/cacher.component';
import { SuppToutComponent } from './supp-tout/supp-tout.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ListeComponent,
    SupprimeComponent,
    CacherComponent,
    SuppToutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
