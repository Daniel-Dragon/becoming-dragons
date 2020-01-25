import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { HomeComponent } from './home/home.component';
import { AppFooterComponent } from './footer/app-footer.component';
import { AboutComponent } from './about/about.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { GuestPortalComponent } from './guest-portal/guest-portal.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth-service/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeadshotComponent } from './headshot/headshot.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'guest-portal', component: GuestPortalComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HeadshotComponent,
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AboutComponent,
    PhotoGalleryComponent,
    GuestPortalComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
