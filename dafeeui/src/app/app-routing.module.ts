import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SiparisComponent } from './components/siparis/siparis.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'masa', component: HomeComponent},
  {path:'masa/:id', component: SiparisComponent}

]


@NgModule({
  exports: [RouterModule],

  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
