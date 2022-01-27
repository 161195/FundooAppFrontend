import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'resetPassword/:token',component:ResetPasswordComponent},
  // {path:'createNotes',component:CreateNotesComponent},

  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
    {path:'notes', component:GetAllNotesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
