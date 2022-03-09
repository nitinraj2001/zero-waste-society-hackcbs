import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './user/admindashboard/admindashboard.component';
import { WelcomePageComponent } from './common/welcome-page/welcome-page.component';
import { WelcomeAdminComponent } from './admin/welcome-admin/welcome-admin.component';
import {UserGuard} from './auth/user.guard';
import {AdminGuard} from './auth/admin.guard';
import { CategoryComponent } from './admin/category/category.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ViewCategoriesComponent } from './common/view-categories/view-categories.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { AddWasteComponent } from './user/add-waste/add-waste.component';
import { NgoRegistrationComponent } from './admin/ngo-registration/ngo-registration.component';
import { RegisterSocietyComponent } from './admin/register-society/register-society.component';
import { ViewSocietiesComponent } from './admin/view-societies/view-societies.component';
import { ViewSocietyComponent } from './admin/view-society/view-society.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserdashboardComponent, canActivate:[UserGuard],children:[
    {path:'',component:WelcomePageComponent},
    {path:'waste',component:AddWasteComponent},
    {path:'society/:id',component:ViewSocietyComponent}

  ]},
  {path:'admin',component:AdmindashboardComponent, canActivate:[AdminGuard],children:[
    {path:'',component:WelcomeAdminComponent},
    {path:'view-categories',component:ViewCategoriesComponent},
    {path:'add-category',component:CategoryComponent},
    {path:'update-category/:id',component:UpdateCategoryComponent},
    {path:'view-user-profile/:id',component:UserProfileComponent},
    {path:'register-ngo',component:NgoRegistrationComponent},
    {path:'society',component:RegisterSocietyComponent},
    {path:'view-society',component:ViewSocietiesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
