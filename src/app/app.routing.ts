import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { DistributerComponent } from './distributer/distributer.component';
import { BLOGSComponent } from './blogs/blogs.component';

import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full"
}, 
  { path: 'home', component: HomeComponent },
  { path: 'about-us',component: AboutUsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'contact', component: ContactComponent },
  { path: "careers", component: CareersComponent },
  { path: "distributer", component:DistributerComponent},
  { path: '**', component: PageNotFoundComponent },
  { path: 'blogs', component: BLOGSComponent}
];

export const routing = RouterModule.forRoot(appRoutes);





// canActivate: [AuthGuardService]