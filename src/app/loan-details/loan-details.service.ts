import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoanService {
    url = 'http://localhost:3000/egl';

    constructor( private http: HttpClient) { }

    getLoanDetails(id) {
        return this.http.get(`${this.url}/get_loan_info/${id}`);
    }

}