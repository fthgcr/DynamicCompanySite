import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: user = new user(); // Input object
  data: any; // coming from api object
  public data$: user; // my api object
  isMail: boolean;


  constructor(private service:UserService, private router: Router, private formBuilder:FormBuilder) { }

  userForm:FormGroup;


  ngOnInit(): void {

    this.userForm = new FormGroup({
      firstName: new FormControl()
    });

    this.createUserForm();
    this.get();

    
  }

  save (){

    this.service.create(this.user)
    .subscribe (data =>{
      console.log(data);
    })  
  }

  onSubmit() {

    this.callbackUser();

    if (this.isMail){
      this.save();
     // this.router.navigate(['/']); 
    }
    
  }

  createUserForm(){
    this.userForm = this.formBuilder.group({

      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [
        Validators.required,
        Validators.email
      ]],
      password: ["", Validators.required]
    });
  }
 
  isMailExist(callback: (data$: user) => any){

    this.get().subscribe(result => {
      

      if ( this.user.userEMail == result.userEMail){
        console.log("VERİ EŞLEŞTİ");
        this.isMail = false;
        alert("Bu e-posta hesabı zaten var.")
      }
      else {
        console.log ("FALSE")
        this.isMail = true;
      }
    }, (error) => {
      this.save()
      
    })
  }


  get() {
    return this.service.getByMail(this.user.userName, this.user.userPassword);

  } 

  callbackUser (){
    
    this.isMailExist ((data$: user) => {
      console.log(data$.userEMail);
    })

  }

 

}