import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserdisplayComponent } from './userdisplay.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { SignupReactiveDemoComponent } from './signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './edituserreactive/edituserreactive.component';

import { userrouting } from './user.routing';

@NgModule({
  declarations:[
    UserdisplayComponent,
    SignupComponent,
    EdituserComponent,
    SignupReactiveDemoComponent,
    EdituserreactiveComponent,
  ],
  imports:[CommonModule,FormsModule,ReactiveFormsModule,userrouting]
})

export class UserModule{}
