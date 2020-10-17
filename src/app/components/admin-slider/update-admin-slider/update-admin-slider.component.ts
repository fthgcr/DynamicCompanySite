import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adminSlider } from 'src/app/models/adminSlider';
import { AdminSliderService } from 'src/app/services/admin-slider.service';

@Component({
  selector: 'app-update-admin-slider',
  templateUrl: './update-admin-slider.component.html',
  styleUrls: ['./update-admin-slider.component.scss']
})
export class UpdateAdminSliderComponent implements OnInit {

  id: number;
  adminSlider: adminSlider;

  constructor(private route: ActivatedRoute,private router: Router,
    private adminSliderService: AdminSliderService) { }

  ngOnInit(): void {

    this.adminSlider = new adminSlider();

    this.id = this.route.snapshot.params['id'];
    
    this.adminSliderService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.adminSlider = data;
      }, error => console.log(error));

  }

  update() {
    this.adminSliderService.update(this.id, this.adminSlider)
      .subscribe(data => console.log(data), error => console.log(error));
    this.adminSlider = new adminSlider();
    this.gotoList();
    

  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/admin/slider']);
  }


}
