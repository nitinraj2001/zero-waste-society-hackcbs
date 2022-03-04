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



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserdashboardComponent, canActivate:[UserGuard],children:[
    {path:'',component:WelcomePageComponent},

  ]},
  {path:'admin',component:AdmindashboardComponent, canActivate:[AdminGuard],children:[
    {path:'',component:WelcomeAdminComponent},
    {path:'add-category',component:CategoryComponent},
    {path:'view-user-profile/:id',component:UserProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
