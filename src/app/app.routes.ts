import { Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'browse',component:BrowseComponent
    },
    {
        path:'',component:LoginComponent,pathMatch:'full'
    }
];
