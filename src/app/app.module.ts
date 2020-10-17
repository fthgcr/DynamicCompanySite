import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAdminMenuComponent } from './components/admin-menu/update-admin-menu/update-admin-menu.component';
import { AdminSliderComponent } from './components/admin-slider/admin-slider.component';
import { adminSlider } from './models/adminSlider';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UpdateAdminSliderComponent } from './components/admin-slider/update-admin-slider/update-admin-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    AdminComponent,
    AdminMenuComponent,
    AdminSideBarComponent,
    UpdateAdminMenuComponent,
    AdminSliderComponent,
    LoginComponent,
    RegisterComponent,
    UpdateAdminSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [
    {provide: 'apiUrl', useValue: 'https://cors-anywhere.herokuapp.com/https://service.toflabs.com/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
  
}
