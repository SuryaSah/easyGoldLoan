import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountService {
    url = 'http://localhost:3000/egl';

    constructor( private http: HttpClient) { }

    getCustomerACHistory(id) {
        return this.http.get(`${this.url}/customer_ac_history/${id}`);
    }

}