import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockListComponent } from './blocks/block-list/block-list.component';

import { HttpClientModule } from '@angular/common/http';

import {  
  MatTableModule,
  MatButtonModule,  
  MatProgressSpinnerModule,
  MatFormFieldModule,  
  MatInputModule,  
  MatDatepickerModule,  
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BlockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
