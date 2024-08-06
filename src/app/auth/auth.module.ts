import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component';
import { RegistropageComponent } from './pages/registropage/registropage.component';
import { ReportespageComponent } from './pages/reportespage/reportespage.component';
import { MaterialModule } from '../material/material.module';
import { EntradasModule } from '../entradas/entradas.module';
import { PasswordRecoverypageComponent } from './pages/password-recoverypage/password-recoverypage.component';
import { CodeVerificationpageComponent } from './pages/code-verificationpage/code-verificationpage.component';
import { ThankYoupageComponent } from './pages/thank-youpage/thank-youpage.component';


@NgModule({
  declarations: [
    LayoutpageComponent,
    RegistropageComponent,
    ReportespageComponent,
    PasswordRecoverypageComponent,
    CodeVerificationpageComponent,
    ThankYoupageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    EntradasModule
  ]
})
export class AuthModule { }
