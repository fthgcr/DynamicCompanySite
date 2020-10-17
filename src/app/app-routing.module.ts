import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { UpdateAdminMenuComponent } from './components/admin-menu/update-admin-menu/update-admin-menu.component';
import { AdminSliderComponent } from './components/admin-slider/admin-slider.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UpdateAdminSliderComponent } from './components/admin-slider/update-admin-slider/update-admin-slider.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },

  {
    path: 'about', component: AboutComponent
  },

  {
    path: 'admin', component: AdminComponent
  },

  {
    path: 'admin/menu', component: AdminMenuComponent
  },

  {
    path: 'admin/menu/update/:id', component: UpdateAdminMenuComponent
  },
  
  {
    path: 'admin/slider', component: AdminSliderComponent
  },

  {
    path: 'admin/slider/update/:id', component: UpdateAdminSliderComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'signup', component: RegisterComponent
  },

  {
    path: 'sidebar', component: AdminSideBarComponent
  },


  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
