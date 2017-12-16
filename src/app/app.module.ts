import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {CustomMaterialModule} from "./modules/custom-material/custom-material.module";
import { AppComponent } from './app.component';
import 'hammerjs';
import { HomeComponent } from './components/home/home.component';
import {routing} from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent} from './components/my-account/my-account.component';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SubmitCarAddComponent } from './components/submit-car-add/submit-car-add.component';
import {CarAdService} from './services/car-ad.service';
import {CarmakeService} from './services/helper/carmake.service';
import {UploadImageService} from './services/upload-image.service';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    SubmitCarAddComponent,
    UploadImageComponent
  ],
  imports: [
  routing,
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule      
  ],
  providers: [LoginService,
              UserService,
              CarAdService,
              CarmakeService,
              UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
