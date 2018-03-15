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
import { CaradListComponent } from './components/carad-list/carad-list.component';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { CaradDetailComponent } from './components/carad-detail/carad-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
// ********************** angular-modal-gallery *****************************
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
import { SendMailComponent } from './components/send-mail/send-mail.component';
import { GoogleMapComponent } from './components/google-map/google-map.component'; // <----------------- angular-modal-gallery library import
// **************************************************************************
import { AgmCoreModule } from '@agm/core';
import { ResultComponent } from './components/result/result.component';
import {GoogleMapService} from './services/google-map.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    SubmitCarAddComponent,
    UploadImageComponent,
    CaradListComponent,
    CaradDetailComponent,
    SendMailComponent,
    GoogleMapComponent,
    ResultComponent
  ],
  imports: [
  routing,
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DataTableModule,
    NgxPaginationModule,
    ModalGalleryModule.forRoot(),
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBiupLsev3b4hiWT94ixnwTLzrIpFMyyVU'
   })    
  ],
  providers: [LoginService,
              UserService,
              CarAdService,
              CarmakeService,
              UploadImageService,
              GoogleMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
