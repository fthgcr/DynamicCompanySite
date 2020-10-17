import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminSlider } from 'src/app/models/adminSlider';
import { AdminSliderService } from 'src/app/services/admin-slider.service';

@Component({
  selector: 'app-admin-slider',
  templateUrl: './admin-slider.component.html',
  styleUrls: ['./admin-slider.component.scss']
})
export class AdminSliderComponent implements OnInit {

  data: any;


  public data$: adminSlider[];
  closeResult: string;
  adminSlider: adminSlider = new adminSlider();
  submitted = false;
 
  constructor(private service:AdminSliderService, private router: Router) { }

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

    this.service.create(this.adminSlider)
    .subscribe (data =>{
      
      console.log(data);

    })
    this.router.navigate(['/admin/slider']);
    
  } 
 
  onSubmit() {
    console.log(this.adminSlider);
    this.save();
    this.refresh();

  }

  refresh(): void {
    window.location.reload();
  }

  update(id: number){
    this.router.navigate(['/admin/slider/update', id]);
  }

  public delete(id: number) {
    this.service.delete(id)
    .subscribe(data => {
    console.log(data);
    this.getAll(); },
    error => console.log(error));
  }  


}
