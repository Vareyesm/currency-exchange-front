import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/api/exchanges-rates/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }

  getExchangeRateValue(sourceCurrencyId: number, destinationCurrencyId: number): Observable<any> {
    return this.http.get(API_URL + 'value', { params: {sourceCurrencyId, destinationCurrencyId}, responseType: 'json' });
  }

  convertCurrency(payload: any): Observable<any> {
    return this.http.post(API_URL + 'convert', payload, httpOptions);
  }
}
