import { RouterModule, Routes } from  '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { PsclassComponent } from './components/psclass/psclass.component';
import { from } from 'rxjs';

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'prefijos', component: AboutComponent },
{ path: 'pselementos', component: HeroesComponent },
{ path: 'psclases', component: PsclassComponent },
{ path: '**', pathMatch: 'full', redirectTo:'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true} );