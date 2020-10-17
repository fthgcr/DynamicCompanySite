import { Component, OnInit } from '@angular/core';
import { adminMenu } from 'src/app/models/adminMenu';
import { AdminMenuService } from 'src/app/services/admin-menu.service';
import { adminSlider } from 'src/app/models/adminSlider';
import { AdminSliderService } from 'src/app/services/admin-slider.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  public menuData$: adminMenu[];
  public sliderData$: adminSlider[];

  public sliderItem: adminSlider;
  

  public deneme: String = "ILK DEGER";

  constructor(
    private menuService: AdminMenuService,
    private sliderService: AdminSliderService

  ) {


  }

  ngOnInit(): void {
    this.getMenuList();
    this.getSliderList(); 

    
  }


  //Menu List
  getMenuList() {
    return this.menuService.get()
      .subscribe(menuData => this.menuData$ = menuData);

  }

  //Slider List
  async getSliderList() {
    
    return this.sliderService.get()
      .subscribe(sliderData => this.sliderData$ = sliderData);

  }

}
