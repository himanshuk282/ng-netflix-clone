import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BrowseComponent } from './components/browse/browse.component';

export const routes: Routes = [
    {
        path:'browse',component:BrowseComponent
    },
    {
        path:'',component:LoginComponent,pathMatch:'full'
    }
];
