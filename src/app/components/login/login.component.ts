declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '207507979541-87hek6vdejjlo821cgd2f0itar9t1kgr.apps.googleusercontent.com',
      callback: (response:any)=>this.handleLogin(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 300
      }
    )
  }
  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleLogin(response: any){
    if(response){
      //decode token
      const payLoad = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem("loggedInUser",JSON.stringify(payLoad));
      //navigate to home or browse
      this.router.navigate(['browse']);
    }
  }

}
