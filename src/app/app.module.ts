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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'guest-portal', component: GuestPortalComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AboutComponent,
    PhotoGalleryComponent,
    GuestPortalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
