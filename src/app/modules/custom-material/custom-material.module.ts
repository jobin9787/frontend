import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule
  ],
  exports: [ MatButtonModule,
             MatMenuModule,
             MatToolbarModule,
             MatIconModule,
             MatCardModule,
             MatGridListModule, 
             MatCheckboxModule,
             MatTabsModule,
             MatProgressSpinnerModule,
             MatRadioModule,
             MatSelectModule
             ],
  declarations: []
})
export class CustomMaterialModule { }
