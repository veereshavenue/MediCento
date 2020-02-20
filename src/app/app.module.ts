import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { routing }        from './app.routing';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { DistributerComponent } from './distributer/distributer.component';
import { BLOGSComponent } from './blogs/blogs.component';
// import { slideToRight } from '../../../../router.animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    SignUpComponent,
    SignInComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactComponent,
    CareersComponent,
    DistributerComponent,
    BLOGSComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
