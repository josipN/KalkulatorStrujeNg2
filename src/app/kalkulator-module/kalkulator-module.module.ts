
/*
 * kalkulator-module.module.ts
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
import { KalkulatorModuleAPIService } from './kalkulator-module.service';

// containers
import { IzracunComponent } from './containers/izracun/izracun.component';
import {ArhivaComponent} from './components/arhiva/arhiva.component';
import { RezultatComponent } from './containers/rezultat/rezultat.component';
@NgModule({
  declarations: [
    IzracunComponent,
    ArhivaComponent,
    RezultatComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
        // add the service to our sub-module
    KalkulatorModuleAPIService
  ],
   exports: [
  IzracunComponent
   ] // sve što se exporta iz našeg @ngModule-a može se koristiti u ostalim @Ngmodule -ima koji importaju TeslaBatteryModule 
   // ako se ovo ne stavi ovaj component se nemoze koristitit :S
   // tj app component.ts koji zove <app-kalkulator-izracun> component nemoze ga viditi.
})
export class KalkulatorModule {}
