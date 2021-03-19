
import { Component } from '@angular/core';
import { ConnectionComponent} from './connection/connection.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './_service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {



  isConnected: boolean = false;
  isConnectedComponent: boolean = false;


  constructor(
    private auth : AuthenticationService,
    private route : ActivatedRoute,
    private router : Router,
    ){}

  ngOnInit(){
    if(sessionStorage.getItem('jwt')){
      this.isConnected = true;
    }
  }

  logout(){
    this.auth.logout();
    sessionStorage.clear();
    this.isConnected = false;
  }

}
