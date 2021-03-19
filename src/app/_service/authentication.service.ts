import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigVarsService } from './config-vars.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(
    private http: HttpClient,
    private router : Router,
    private route : ActivatedRoute,
    private configVar : ConfigVarsService,
    ) { }

  public login(username : string, pwd :string){
    return  this.http.post(this.configVar.urlV2RestAuth+"login/", {
      'username' : username,
      'password' : pwd,
    })
  }

  public getUserInfo(username : any){
    return this.http.get(this.configVar.urlV2PeopleUser+"/"+username)
  }

  public logout(){
    this.http.post(this.configVar.urlV2RestAuth+"logout/", {
    })
    localStorage.clear();
    this.router.navigate(['/home'], {relativeTo: this.route});
  }


}
