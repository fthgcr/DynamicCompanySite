import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adminMenu } from 'src/app/models/adminMenu';
import { AdminMenuService } from 'src/app/services/admin-menu.service';

@Component({
  selector: 'app-update-admin-menu',
  templateUrl: './update-admin-menu.component.html',
  styleUrls: ['./update-admin-menu.component.scss']
}) 
export class UpdateAdminMenuComponent implements OnInit {

  id: number;
  adminMenu: adminMenu;

  constructor(private route: ActivatedRoute,private router: Router,
    private adminMenuService: AdminMenuService) { }

  ngOnInit() {
    this.adminMenu = new adminMenu();

    this.id = this.route.snapshot.params['id'];
    
    this.adminMenuService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.adminMenu = data;
      }, error => console.log(error));
  }

  update() {
    this.adminMenuService.update(this.id, this.adminMenu)
      .subscribe(data => console.log(data), error => console.log(error));
    this.adminMenu = new adminMenu();
    this.gotoList();
    

  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/admin/menu']);
  }



}
