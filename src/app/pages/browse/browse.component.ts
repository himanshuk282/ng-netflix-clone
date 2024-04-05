import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent,BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  authService = inject(AuthService);
  name:string = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImage:string = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  userEmail:string = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.authService.signOut();
  }
}
