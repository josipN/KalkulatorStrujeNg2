import { Injectable } from '@angular/core';
import {Response, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BaseUrl} from './models/BaseUrl';



@Injectable()
export class KalkulatorModuleAPIService {
    baseUrl: string;
    constructor(private http: Http) {
        const base = new BaseUrl();
        console.log(base.getBaseUrl());
        this.baseUrl = 'http://localhost:47412/';

}
    getIzracunParams(): Observable<any> {
        return this.http.get(`${this.baseUrl}api/unosi`)
                        .map((response: Response) => response.json());
    }
    /* getMockData(): Observable<any> {
        return this.http.get
    }*/
}
