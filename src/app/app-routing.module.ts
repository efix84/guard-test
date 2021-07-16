import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SecretComponent } from './components/secret/secret.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'secret', canActivate: [AuthenticationGuard],component: SecretComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
