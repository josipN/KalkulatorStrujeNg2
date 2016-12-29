
import { Component, Input, OnInit } from '@angular/core';
import * as models from '../models/models';

@Component({
    selector: 'app-rezultat',
    templateUrl: './rezultat.component.html',
    styleUrls: ['./rezultat.component.scss']
})
export class RezultatComponent implements OnInit {
@Input() data: any;
ngOnInit() {
console.log(this.data, "iz constructora");
}
 sendToServer() {
        alert("gg");
    }
}

