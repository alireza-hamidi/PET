import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formula } from 'src/app/models/formula';
import { environment } from '../../../../environments/environment'
@Injectable({ providedIn: 'root' })
export class FormFactoryService {
    constructor(private httpClient: HttpClient) { }

    baseUrl = environment.APP_BASE_HREF
    headers = new HttpHeaders({ 'content-type': 'application/json' })
    get() {
        return this.httpClient.get(this.baseUrl)
    }
    post<T>(url: string, body: any) {
        return this.httpClient.post<T>(this.baseUrl + url, body, { headers: this.headers });
    }
}