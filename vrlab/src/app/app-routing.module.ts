import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MethodCall } from '@angular/compiler';
import { MethodologyComponent } from './methodology/methodology.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'methodology', component: MethodologyComponent},
  {path:'about', component: AboutComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
