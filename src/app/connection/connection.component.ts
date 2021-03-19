import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../_service/authentication.service';
import { PeopleService } from '../_service/people.service';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  //display variables
  isAlert: boolean = false;
  isUsernameOk: boolean ;
  isEmailOk: boolean;

  //cache stockage variables
  userList

  //connexion var
  id : number;

  //navigation var
  returnUrl: string;
  loading: boolean = false;

  //data sharing
  isConnectedComponent = "true";
  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private people : PeopleService,
    private spinner : NgxSpinnerService,
    private authentication : AuthenticationService,
    private router : Router,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    (this.people.getAllUsernames()).subscribe((response)=>{
      this.userList = response;
      console.log(this.userList)
    });

    //return url from route parameter of default to /home
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    console.log(this.returnUrl);

    this.messageEvent.emit(this.isConnectedComponent);

  }

  // test if username exist or not
  testPseudo(event : Event){
    for(var user of this.userList){
      if((<HTMLInputElement>event.target).value == user.username){
        this.isUsernameOk=true;
        this.id = user.id;
        console.log(this.id)
        break;
      }else{
        this.isUsernameOk= false;
      }
    }
  }


  //test the pwd and catch the token to log
  login(form : NgForm){
    this.spinner.show();

    const username = form.value['username'];
    const password = form.value['password'];


    this.authentication.login(username, password).subscribe(data => {
      sessionStorage.setItem('jwt', JSON.stringify(data));


      this.authentication.getUserInfo(this.id).subscribe((userInfo) => {
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      })

      console.log(this.returnUrl);
      this.router.navigate([this.returnUrl]);
    }, error => {
      this.spinner.hide();
      return this.isAlert = true
    });

  }
}
