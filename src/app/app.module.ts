import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AlertModule} from "ng2-bootstrap";
import {SocialApiService} from "./social.api.service";
import {RouterModule, Router} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  providers: [SocialApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
