/**
 * kalkulator-izracun.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { KalkulatorModuleAPIService } from '../kalkulator-module.service';
import * as models from '../models/models';

@Component({
    selector: 'app-izracun',
    templateUrl: './izracun.component.html',
    styleUrls: ['./izracun.component.scss']
})

export class IzracunComponent implements OnInit {
    struja: FormGroup;
    rezultati: models.Rezultati;
    showResult: boolean = false;
    constructor(private _KalkulatorModuleAPIService: KalkulatorModuleAPIService, private _fb: FormBuilder) { }

    onSubmit() {
        console.log(this.struja.value, this.struja.valid);
        console.log(this.rezultati);
        this.showResult = true;
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
        this.struja.valueChanges.subscribe(data => {
            console.log('form changed', data);
            console.log('hiding result', this.showResult);
            this.showResult = true;
        })
        /* this._KalkulatorModuleAPIService.getIzracunParams().subscribe(items =>{ this.items = items; console.log(items);} ,
                                                                      error => console.log('Custom error web api failed', error)); */
        // this._KalkulatorModuleAPIService.
    }
}
