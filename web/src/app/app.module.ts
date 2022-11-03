import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth.guard';
import { Page404Component } from './page404/page404.component';
import { NewproductComponent } from './newproduct/newproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NabvarComponent,
    RegisterComponent,
    EditComponent,
    SearchComponent,
    Page404Component,
    NewproductComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
