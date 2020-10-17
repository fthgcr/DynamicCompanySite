import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: user = new user(); // Input object
  data: any; // coming from api object
  public data$: user; // my api object
  isMail: boolean;
  wrongLogin: boolean = false;

  constructor(private service:UserService, private router: Router) { }

  ngOnInit(): void {

  }


  onSubmit() {

    this.callbackUser();
    

  }

  isMailExist(callback: (data$: user) => any){

    this.get().subscribe(result => {
      

      if ( this.user.userName == result.userName && this.user.userPassword == result.userPassword){
        
        alert("Giriş yapıldı")
        this.router.navigate(['/login']); 

      }
      else {
        
      }
    }, (error) => {
      
      this.wrongLogin = true;
      
    })
  }


  get() {
    return this.service.getByMail(this.user.userName, this.user.userPassword);

  } 

  callbackUser (){
    
    this.isMailExist ((data$: user) => {
      console.log(data$.userName);
    })

  }
 

}
