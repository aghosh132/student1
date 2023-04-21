import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';

const routes: Routes = [{path:"",component:LoginComponent},
{path:"register",component:RegistrationComponent},
{path:"sdashboard",component:SdashboardComponent},
{path:"adashboard",component:AdashboardComponent},
{path:"viewstatus",component:ViewstatusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
