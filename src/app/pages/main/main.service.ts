import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable()
export class MaineService {
    constructor(private httpClient: HttpClient) { }
    baseUrl = environment.APP_BASE_HREF
    get<T>(url) {
        return this.httpClient.get<T>(this.baseUrl + url)
    }

}