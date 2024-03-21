import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CambioPasswordComponent } from './pages/cambio-password/cambio-password.component';
import { OlvidastePasswordComponent } from './pages/olvidaste-password/olvidaste-password.component';
import { AplicacionComponent } from './pages/aplicacion/aplicacion.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CarouselAplicacionComponent } from './components/carousel-aplicacion/carousel-aplicacion.component';
import { NavbarAplicacionComponent } from './components/navbar-aplicacion/navbar-aplicacion.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'olvidaste-pass',component:OlvidastePasswordComponent},
  {path:'cambio-pass',component:CambioPasswordComponent},
  {path:'aplicacion',component:AplicacionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CambioPasswordComponent,
    OlvidastePasswordComponent,
    AplicacionComponent,
    CarouselAplicacionComponent,
    NavbarAplicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
