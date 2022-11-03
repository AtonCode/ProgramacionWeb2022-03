import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'edit', redirectTo: 'edit', pathMatch: 'full'},
  { path: 'edit', component: EditComponent,canActivate: [AuthGuard] },
  { path: 'register', redirectTo: 'register', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
  { path: 'pageNotFound', component: Page404Component },

  { path: 'new', redirectTo: 'new', pathMatch: 'full'},
  { path: 'new', component: NewproductComponent,canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
