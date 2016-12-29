/**
 * kalkulator-izracun.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as models from '../models/models';
import { KalkulatorModuleAPIService} from '../kalkulator-module.service';
@Component({
    // selector: 'app-arhiva',
    template: `
    <form novalidate [formGroup]="struja" (ngSubmit)="onSubmit(struja)">
    <h1>IZ ARHVEIzracun struje</h1>
     <div formGroupName="jeftinaStruja">
     <h4>Jeftina struja</h4>
      
        <label>
            <span>Pocetak mjeseca potrosnja</span>
            <input formControlName="pocetakMjeseca" type="number" /> kWh
            <div 
                class="error"
                *ngIf="struja.get('jeftinaStruja').get('pocetakMjeseca').hasError('required')
                   && struja.get('jeftinaStruja').get('pocetakMjeseca').touched">                   
            Polje je obavezno.
            </div>
        </label>
        <br/>
        <label>
            <span>Kraj mjeseca potrosnja</span>
            <input formControlName="krajMjeseca" type="number"  /> kWh
            <div 
                class="error"
                *ngIf="struja.get('jeftinaStruja').get('krajMjeseca').hasError('required')
                   && struja.get('jeftinaStruja').get('krajMjeseca').touched">                   
            Polje je obavezno.
            </div>
        </label>
     </div>

    <div formGroupName="skupaStruja">
    <h4>Skupa struja</h4>
        <label>
            <span>Pocetak mjeseca potrosnja</span>
            <input formControlName="pocetakMjeseca" type="number"  /> kWh
            <div 
                class="error"
                *ngIf="struja.get('jeftinaStruja').get('pocetakMjeseca').hasError('required')
                   && struja.get('jeftinaStruja').get('pocetakMjeseca').touched">                   
            Polje je obavezno.
            </div>
        </label>
        <br/>
        <label>
            <span>Kraj mjeseca potrosnja</span>
            <input formControlName="krajMjeseca" type="number"  /> kWh
            <div 
                class="error"
                *ngIf="struja.get('jeftinaStruja').get('krajMjeseca').hasError('required')
                   && struja.get('jeftinaStruja').get('krajMjeseca').touched">                   
            Polje je obavezno.
            </div>
        </label>
     </div>
     <button type="submit" [disabled]="struja.invalid">Izracunaj</button>
    </form>
    `,
    styleUrls: ['./arhiva.component.scss']
})

export class ArhivaComponent implements OnInit {
    struja: FormGroup;
    rezultati: models.Rezultati;
    constructor(private _fb: FormBuilder, private _KalkulatorModuleAPIService: KalkulatorModuleAPIService) { }

    onSubmit() {
        console.log(this.struja.value, this.struja.valid);
    }
    ngOnInit() {
        // this.struja = new FormGroup({
        //     jeftinaStruja: new FormGroup({
        //         pocetakMjeseca: new FormControl('', Validators.required),
        //         krajMjeseca: new FormControl('', Validators.required)
        //     }),
        //     skupaStruja: new FormGroup({
        //         pocetakMjeseca: new FormControl('', Validators.required),
        //         krajMjeseca: new FormControl('', Validators.required)
        //     })
        // });
        this.struja = this._fb.group({
            jeftinaStruja: this._fb.group({
                pocetakMjeseca: [33, Validators.required],
                krajMjeseca: [22, Validators.required],
            }),
            skupaStruja: this._fb.group({
                pocetakMjeseca: [22, Validators.required],
                krajMjeseca: [11, Validators.required],
            }),
        });
        /* this._KalkulatorModuleAPIService.getIzracunParams().subscribe(items =>{ this.items = items; console.log(items);} ,
                                                                      error => console.log('Custom error web api failed', error)); */
        // this._KalkulatorModuleAPIService.
    }
}
