import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { RegisterComponent } from "./component/register/register.component";
import { LoginComponent } from "./component/login/login.component";
import { MainComponent } from "./component/main/main.component";
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { CatalogoComponent } from './component/catalogo/catalogo.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    TooltipComponent,
    CatalogoComponent



  ],
  imports: [
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    ReactiveFormsModule,
    BrowserModule,
    TooltipModule,
    FormsModule




  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
