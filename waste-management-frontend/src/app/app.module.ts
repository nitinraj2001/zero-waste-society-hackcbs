import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './user/admindashboard/admindashboard.component';
import {MatCardModule} from '@angular/material/card';
import { WelcomePageComponent } from './common/welcome-page/welcome-page.component';
import { WelcomeAdminComponent } from './admin/welcome-admin/welcome-admin.component';
import { CategoryComponent } from './admin/category/category.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ViewCategoriesComponent } from './common/view-categories/view-categories.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { AgmCoreModule } from '@agm/core';
import { AddWasteComponent } from './user/add-waste/add-waste.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    WelcomePageComponent,
    WelcomeAdminComponent,
    CategoryComponent,
    UserProfileComponent,
    ViewCategoriesComponent,
    UpdateCategoryComponent,
    AddWasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKrOj0daB7G8s-tFqykodZ-zCt17O3590',
      libraries: ['places']
    }),
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
