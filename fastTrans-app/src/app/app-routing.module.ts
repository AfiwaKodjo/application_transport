import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuartierListComponent} from './quartier-list/quartier-list.component';
import { PtArretComponent } from './pt-arret/pt-arret.component';
import { LigneComponent } from './ligne/ligne.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdminComponent } from './admin/admin.component';
import { CreateQuartierComponent } from './create-quartier/create-quartier.component';
import { LigneDetailsComponent } from './ligne-details/ligne-details.component';


const routes: Routes = [
  { path: '',
  //redirectTo: 'app',
  //pathMatch: 'full'
  component: HomeComponent
},

{ path: 'quartiers',
  component: QuartierListComponent

},

{ path: 'pt-arrets',
  component: PtArretComponent

},

{ path: 'lignes',
  component: LigneComponent

},

{ path: '',
  pathMatch:'full',
  redirectTo: 'auth',
  


},

{ path: 'auth',
  component: AuthentificationComponent

},

{ path: 'admin',
  component: AdminComponent

},

{ path: 'create-quartier',
  component: CreateQuartierComponent

},

{ path: 'ligne-details/:id',
  component: LigneDetailsComponent

}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
