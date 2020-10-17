import { Component, OnInit } from '@angular/core';
import { AdminMenuService } from 'src/app/services/admin-menu.service';
import { adminMenu } from 'src/app/models/adminMenu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})

export class AdminMenuComponent implements OnInit {
  data: any;


  public data$: adminMenu[];
  closeResult: string;
  adminMenu: adminMenu = new adminMenu();
  submitted = false;
 
  constructor(private service:AdminMenuService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

   //Read
  getAll() {
    return this.service.get()
   .subscribe(data=>this.data$=data);
   console.log(this.data);

  } 

  save (){

    this.service.create(this.adminMenu)
    .subscribe (data =>{
      
      console.log(data);

    })
    this.router.navigate(['/admin/menu']);
    
  }

  onSubmit() {
    console.log(this.adminMenu);
    this.save();
    this.refresh();

  }

  refresh(): void {
    window.location.reload();
  }

  update(id: number){
    this.router.navigate(['/admin/menu/update', id]);
  }

   

}


