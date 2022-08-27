import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuartierListComponent } from './quartier-list/quartier-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PtArretComponent } from './pt-arret/pt-arret.component';
import { LigneComponent } from './ligne/ligne.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdminComponent } from './admin/admin.component';
import { CreateQuartierComponent } from './create-quartier/create-quartier.component';
import { LigneDetailsComponent } from './ligne-details/ligne-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuartierListComponent,
    PtArretComponent,
    LigneComponent,
    HomeComponent,
    AuthentificationComponent,
    AdminComponent,
    CreateQuartierComponent,
    LigneDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
